import { z } from "zod";

export const clientDetailsSchema = z
  .object({
    clientName: z.string().min(1, "Client name is required"),
    clientEmail: z.string().min(1, "Client email is required"),
    clientPhone: z.string().min(1, "Client phone is required"),
    clientAddress: z.string().min(1, "Client address is required"),
    garmentType: z.string().min(1, "garment Type is required"),
    quantity: z.number(),
    deadline:z.string().min(1, "Deadline is required"),
    description:z.string(),
  })

export type CreateOrderType = z.infer<typeof clientDetailsSchema>;