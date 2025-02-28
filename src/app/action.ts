"use server";

import { z } from "zod";

const waitlistScehma = z.object({
  email: z.string({
    invalid_type_error: "Invalid Email",
  }),
});

export default async function joinWaitlist(formData: FormData) {
  const validatedFields = waitlistScehma.safeParse({
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
}
