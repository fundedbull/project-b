"use server";

import { z } from "zod";
import { prisma } from "../server/db";

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

export async function getWaitlistCount() {
  try {
    const count = await prisma.waitlist.count();
    return count;
  } catch (error) {
    console.error("Error getting waitlist count:", error);
    return Math.floor(Math.random() * 1000);
  }
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

const createBrixSchema = z.object({
  userName: z
    .string()
    .min(1, "Name is required")
    .max(50, "Name cannot exceed 50 characters"),
  brixName: z
    .string()
    .min(1, "Brix name is required")
    .max(50, "Brix name cannot exceed 50 characters"),
  industry: z.enum(
    [
      "business",
      "technology",
      "health",
      "education",
      "entertainment",
      "sales",
      "other",
    ],
    {
      errorMap: () => ({ message: "Please select a valid industry" }),
    }
  ),
  niche: z
    .string()
    .min(1, "Niche is required")
    .max(50, "Niche cannot exceed 50 characters"),
  hasTeam: z.enum(["yes", "no"], {
    errorMap: () => ({
      message: "Please select whether you have team members",
    }),
  }),
});

export async function createBrix(prevState: unknown, formData: FormData) {
  const validatedFields = createBrixSchema.safeParse({
    userName: formData.get("userName"),
    brixName: formData.get("brixName"),
    industry: formData.get("industry"),
    niche: formData.get("niche"),
    hasTeam: formData.get("hasTeam"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  console.log(validatedFields.data);

  return { success: true };
}
