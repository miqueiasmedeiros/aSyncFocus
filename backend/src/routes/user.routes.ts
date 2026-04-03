import { Router } from 'express';
import { getMe, updateMe, changePasswordMe } from '../controllers/user.controller.js';
import { authMiddleware } from '../middlewares/auth.js';
import { validate } from '../middlewares/validate.js';
import { updateProfileSchema, changePasswordSchema } from '../dtos/user.js';

export const userRouter = Router();

userRouter.get('/me', authMiddleware, getMe);
userRouter.put('/me', authMiddleware, validate({ body: updateProfileSchema }), updateMe);
userRouter.put('/me/change-password', authMiddleware, validate({ body: changePasswordSchema }), changePasswordMe);
