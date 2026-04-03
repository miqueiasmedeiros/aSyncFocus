import { Request, Response, NextFunction } from 'express';
import { addComment, editComment, listComments, removeComment } from '../services/comment.service.js';

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.user?.userId ?? 0;
    const comment = await addComment(userId, req.body);
    res.status(201).json(comment);
  } catch (error) {
    next(error);
  }
}

export async function list(req: Request, res: Response, next: NextFunction) {
  try {
    const postId = Number(req.params.postId);
    const comments = await listComments(postId);
    res.json(comments);
  } catch (error) {
    next(error);
  }
}

export async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.user?.userId ?? 0;
    const commentId = Number(req.params.id);
    const { comment } = req.body;
    const updated = await editComment(userId, commentId, comment);
    res.json(updated);
  } catch (error) {
    next(error);
  }
}

export async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.user?.userId ?? 0;
    const commentId = Number(req.params.id);
    await removeComment(userId, commentId);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
}
