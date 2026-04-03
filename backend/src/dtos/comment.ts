import { z } from 'zod';

export const commentPayloadSchema = z.object({
  postId: z.number().int().positive(),
  comment: z.string().max(1000)
});

export const postIdParamSchema = z.object({
  postId: z.coerce.number().int().positive()
});

export const commentIdParamSchema = z.object({
  id: z.coerce.number().int().positive()
});

export const updateCommentSchema = z.object({
  comment: z.string().min(1).max(1000)
});
