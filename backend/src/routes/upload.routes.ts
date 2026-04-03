import { Router } from 'express';
import { uploadImage } from '../controllers/upload.controller.js';
import { authMiddleware } from '../middlewares/auth.js';

export const uploadRouter = Router();

uploadRouter.post('/image', authMiddleware, uploadImage);
