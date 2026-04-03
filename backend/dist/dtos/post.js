import { z } from 'zod';
export const postPayloadSchema = z.object({
    subject: z.string().max(200),
    content: z.string().max(2000),
    topics: z.array(z.string().min(1).max(120)).min(1),
    imageUrl: z.string().max(500).nullable().optional()
});
export const postIdParamSchema = z.object({
    id: z.coerce.number().int().positive()
});
