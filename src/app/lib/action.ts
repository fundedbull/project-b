"use server";
import { prisma } from "@/app/lib/db";
import { Prisma } from "@prisma/client";
import { redirect } from "next/navigation";
import { z } from "zod";
import bcrypt from "bcrypt";

const SignUpSchema = z.object({
  email: z.string().email(),
  username: z.string(),
  tos: z.string().transform((value) => value === "on"),
  me: z.string().transform((value) => value === "on"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long.")
    .max(20, "Password must not exceed 20 characters"),
});

export async function signUp(
  prevState: string | undefined,
  formData: FormData
) {
  const results = SignUpSchema.safeParse(Object.fromEntries(formData));
  if (!results.success) {
    return "Password must be within 8 to 20 characters.";
  }
  try {
    await prisma.user.create({
      data: {
        email: results.data.email,
        password: await bcrypt.hash(results.data.password, 10),
      },
    });
  } catch (error) {
    if ((error as Prisma.PrismaClientKnownRequestError).code === "P2002") {
      return "This email is already associated with an account";
    } else {
      return "An unexpected error happened";
    }
  }
  redirect("/login");
}
