"use server";

import { z } from "zod";
import { prisma } from "./lib/db";

const waitlistScehma = z.object({
  email: z.string({
    invalid_type_error: "Invalid Email",
  }),
});

export async function joinWaitlist(prevState: unknown, formData: FormData) {
  console.log("formData", Object.fromEntries(formData));
  const validatedFields = waitlistScehma.safeParse({
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.waitlist.create({
      data: { email: validatedFields.data.email },
    });
  } catch (error) {
    console.error("Error saving email to waitlist:", error);
  }

  return { success: true };
}

const investorInquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string(),
  amount: z.string(),
});

export async function submitInvestorInquiry(
  prevState: unknown,
  formData: FormData
) {
  const validatedFields = investorInquirySchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    amount: formData.get("amount"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  console.log(validatedFields.data);
  try {
    await prisma.investorInqury.create({
      data: validatedFields.data, // Prisma will insert the validated data
    });
  } catch (error) {
    console.log("Error saving investor inquiry:", error);
  }

  return { success: true };
}
