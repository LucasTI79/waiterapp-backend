import { z } from 'zod';

export const CreateCategorySchema = z.object({
  name: z.string(),
  icon: z.string()
}).required();

export type CreateCategoryRequest = z.infer<typeof CreateCategorySchema>;
