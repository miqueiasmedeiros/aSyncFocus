import { Router } from 'express';
import { login, register, resend, verify } from '../controllers/auth.controller.js';
import { validate } from '../middlewares/validate.js';
import { loginSchema, registerSchema, resendQuerySchema, verifyQuerySchema } from '../dtos/auth.js';

export const authRouter = Router();

authRouter.post('/register', validate({ body: registerSchema }), register);
authRouter.post('/login', validate({ body: loginSchema }), login);
authRouter.get('/verify', validate({ query: verifyQuerySchema }), verify);
authRouter.post('/resend-verification', validate({ query: resendQuerySchema }), resend);
