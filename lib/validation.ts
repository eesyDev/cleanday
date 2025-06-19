import { z } from "zod";

export const OrderFormValidation = z.object({
    roomCount: z.number(),
    wcCount: z.number(),
    phone: z.string().refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number")

  });