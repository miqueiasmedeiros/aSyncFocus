import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(180),
  password: z.string().min(8)
});

export const loginSchema = z.object({
  email: z.string().email().max(180),
  password: z.string().min(1)
});

export const verifyQuerySchema = z.object({
  token: z.string().min(1)
});

export const resendQuerySchema = z.object({
  email: z.string().email().max(180)
});
