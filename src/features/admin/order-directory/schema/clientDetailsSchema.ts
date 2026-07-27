import { z } from "zod";

export const clientDetailsSchema = z
  .object({
    clientName: z.string().min(1, "Client name is required"),
    clientEmail: z.string().email('Invalid Email Address'),
    clientPhone: z.string().optional(),
    clientAddress: z.string().optional(),
    garmentType: z.string().min(1, "Garment Type name is required"),
    quantity: z.number().int().positive("Quantity must be a positive number"),
    deadline:z.string().optional(),
    description:z.string().optional(),
  })

export type CreateOrderType = z.infer<typeof clientDetailsSchema>;