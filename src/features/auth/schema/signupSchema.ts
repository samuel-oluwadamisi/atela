import { z } from "zod";

export const signupSchema = z
  .object({
    email: z.string().email("Enter a valid email"),
    password: z
      .string()
      .min(8, "At least 8 characters")
      .regex(/[A-Z]/, "Password missing an uppercase letter")
      .regex(/[a-z]/, "Password missing a lowercase letter")
      .regex(/[0-9]/, "Password requires a number")
      .regex(/[^A-Za-z0-9]/, "Password requires a symbol"),
    confirmPassword: z.string(),
    factoryName: z.string().min(1, "Factory name is required"),
    teamSize: z.number().min(1, "Team size is required"),
    currency: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and Confirm Password must match",
    path: ["confirmPassword"],
  });

export type SignupFormData = z.infer<typeof signupSchema>;