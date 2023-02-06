import { z } from 'zod';

export const ChangeStatusSchema = z.object({
  status: z.enum(['WAITING','IN_PRODUCTION', 'DONE'])
});

export type ChangeStatusRequest = z.infer<typeof ChangeStatusSchema>
