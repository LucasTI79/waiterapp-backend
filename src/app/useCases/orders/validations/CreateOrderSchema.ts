import { z } from 'zod';

export const CreateOrderSchema = z.object({
  table: z.string(),
  products: z.object({
    product: z.string(),
    quantity: z.number().optional().default(1),
  }).array().optional().default([])
});

export type CreateOrderRequest = z.infer<typeof CreateOrderSchema>
