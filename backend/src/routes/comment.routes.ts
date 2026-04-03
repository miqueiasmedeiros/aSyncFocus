import { Router } from 'express';
import { create, list, update, remove } from '../controllers/comment.controller.js';
import { authMiddleware } from '../middlewares/auth.js';
import { validate } from '../middlewares/validate.js';
import {
  commentPayloadSchema,
  commentIdParamSchema,
  postIdParamSchema,
  updateCommentSchema
} from '../dtos/comment.js';

export const commentRouter = Router();

commentRouter.post('/', authMiddleware, validate({ body: commentPayloadSchema }), create);
commentRouter.get('/:postId', validate({ params: postIdParamSchema }), list);
commentRouter.put('/:id', authMiddleware, validate({ params: commentIdParamSchema, body: updateCommentSchema }), update);
commentRouter.delete('/:id', authMiddleware, validate({ params: commentIdParamSchema }), remove);
