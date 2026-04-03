import { Router } from 'express';
import { updateMe } from '../controllers/user.controller.js';
import { authMiddleware } from '../middlewares/auth.js';
import { validate } from '../middlewares/validate.js';
import { updateProfileSchema } from '../dtos/user.js';
export const userRouter = Router();
userRouter.put('/me', authMiddleware, validate({ body: updateProfileSchema }), updateMe);
