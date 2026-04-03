import { Router } from 'express';
import { react } from '../controllers/reaction.controller.js';
import { authMiddleware } from '../middlewares/auth.js';
import { validate } from '../middlewares/validate.js';
import { reactionPayloadSchema } from '../dtos/reaction.js';
export const reactionRouter = Router();
reactionRouter.post('/', authMiddleware, validate({ body: reactionPayloadSchema }), react);
