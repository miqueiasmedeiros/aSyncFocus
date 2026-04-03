import { z } from 'zod';
export const commentPayloadSchema = z.object({
    postId: z.number().int().positive(),
    comment: z.string().max(1000)
});
export const postIdParamSchema = z.object({
    postId: z.coerce.number().int().positive()
});
