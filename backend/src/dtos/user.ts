import { z } from 'zod';

export const updateProfileSchema = z.object({
  name: z.string().min(2).max(120),
  avatarUrl: z.string().max(500).nullable().optional()
});

export const changePasswordSchema = z.object({
  password: z.string().min(6).max(200)
});
