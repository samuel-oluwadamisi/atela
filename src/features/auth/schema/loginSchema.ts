import { z } from "zod";

export const loginSchema = z
  .object({
    email: z.string().email("Enter a valid email"),
    password: z
      .string()
      .min(8, "At least 8 characters")
      .regex(/[A-Z]/, "Password missing an uppercase letter")
      .regex(/[a-z]/, "Password missing a lowercase letter")
      .regex(/[0-9]/, "Password requires a number")
      .regex(/[^A-Za-z0-9]/, "Password requires a symbol")
  })