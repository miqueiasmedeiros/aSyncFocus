import { z } from 'zod';

export const reactionPayloadSchema = z.object({
  postId: z.number().int().positive(),
  type: z.enum(['LIKE', 'LOVE', 'WOW', 'HAHA'])
});

export const reactionPostParamSchema = z.object({
  postId: z.coerce.number().int().positive()
});

export const reactionRemoveQuerySchema = z.object({
  type: z.enum(['LIKE', 'LOVE', 'WOW', 'HAHA'])
});
