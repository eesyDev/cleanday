import { z } from "zod";

export const OrderFormValidation = z.object({
    roomCount: z.number(),
    wcCount: z.number(),
    phone: z.string().refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number")

  });

  export const SimpleFormValidation = z.object({
    name: z.string().min(1, "Name must be at least 1 character long"),
    phone: z.string().refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number")

  });