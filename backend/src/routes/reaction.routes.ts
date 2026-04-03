import { Router } from 'express';
import { react, remove } from '../controllers/reaction.controller.js';
import { authMiddleware } from '../middlewares/auth.js';
import { validate } from '../middlewares/validate.js';
import {
  reactionPayloadSchema,
  reactionPostParamSchema,
  reactionRemoveQuerySchema
} from '../dtos/reaction.js';

export const reactionRouter = Router();

reactionRouter.post('/', authMiddleware, validate({ body: reactionPayloadSchema }), react);
reactionRouter.delete(
  '/:postId',
  authMiddleware,
  validate({ params: reactionPostParamSchema, query: reactionRemoveQuerySchema }),
  remove
);
