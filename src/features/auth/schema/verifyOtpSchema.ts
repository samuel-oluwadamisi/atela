import { z } from "zod";

export const verifyOtpSchema = z
  .object({
    email: z.string().email("Enter a valid email"),
    code: z
      .number()
      .min(6, "At least 6 characters")
  })