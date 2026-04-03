import { Router } from 'express';
import { create, list } from '../controllers/comment.controller.js';
import { authMiddleware } from '../middlewares/auth.js';
import { validate } from '../middlewares/validate.js';
import { commentPayloadSchema, postIdParamSchema } from '../dtos/comment.js';
export const commentRouter = Router();
commentRouter.post('/', authMiddleware, validate({ body: commentPayloadSchema }), create);
commentRouter.get('/:postId', validate({ params: postIdParamSchema }), list);
