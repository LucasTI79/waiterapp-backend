import { z } from 'zod';

export const CreateProductSchema = z.object({
  name: z.string(),
  description: z.string(),
  imagePath: z.string(),
  price: z.number().min(0),
  category: z.string(),
  ingredients: z.object({
    name: z.string(),
    icon: z.string()
  }).array().optional().default([])
});

export type CreateProductRequest = z.infer<typeof CreateProductSchema>;
