import { z } from 'zod';
export const reactionPayloadSchema = z.object({
    postId: z.number().int().positive(),
    type: z.enum(['LIKE', 'LOVE', 'HAHA', 'WOW', 'SAD', 'ANGRY'])
});
