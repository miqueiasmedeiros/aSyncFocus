import { Request, Response, NextFunction } from 'express';
import { reactToPost, removeReaction } from '../services/reaction.service.js';

export async function react(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.user?.userId ?? 0;
    const reaction = await reactToPost(userId, req.body);
    res.status(201).json(reaction);
  } catch (error) {
    next(error);
  }
}

export async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.user?.userId ?? 0;
    const postId = Number(req.params.postId);
    const type = String(req.query.type);
    const result = await removeReaction(userId, postId, type as any);
    res.json(result);
  } catch (error) {
    next(error);
  }
}
