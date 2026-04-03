import { Request, Response, NextFunction } from 'express';
import {
  createNewPost,
  deleteExistingPost,
  getPostById,
  listAllPosts,
  updateExistingPost
} from '../services/post.service.js';

export async function list(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.user?.userId;
    const posts = await listAllPosts(userId);
    res.json(posts);
  } catch (error) {
    next(error);
  }
}

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.user!.userId;
    const post = await createNewPost(userId, req.body);
    res.status(201).json(post);
  } catch (error) {
    next(error);
  }
}

export async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.user!.userId;
    const postId = Number(req.params.id);
    const post = await updateExistingPost(userId, postId, req.body);
    res.json(post);
  } catch (error) {
    next(error);
  }
}

export async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.user!.userId;
    const postId = Number(req.params.id);
    const result = await deleteExistingPost(userId, postId);
    res.json(result);
  } catch (error) {
    next(error);
  }
}

export async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    const postId = Number(req.params.id);
    const userId = req.user?.userId;
    const post = await getPostById(postId, userId);
    res.json(post);
  } catch (error) {
    next(error);
  }
}
