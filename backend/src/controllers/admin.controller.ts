import { Request, Response, NextFunction } from 'express';
import * as adminService from '../services/admin.service.js';

export async function getUsers(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await adminService.listUsers());
  } catch (e) { next(e); }
}

export async function createUser(req: Request, res: Response, next: NextFunction) {
  try {
    res.status(201).json(await adminService.createUser(req.body));
  } catch (e) { next(e); }
}

export async function editUser(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await adminService.editUser(Number(req.params.id), req.body));
  } catch (e) { next(e); }
}

export async function deleteUser(req: Request, res: Response, next: NextFunction) {
  try {
    await adminService.deleteUser(Number(req.params.id));
    res.status(204).end();
  } catch (e) { next(e); }
}

export async function getPosts(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await adminService.listPosts());
  } catch (e) { next(e); }
}

export async function deletePost(req: Request, res: Response, next: NextFunction) {
  try {
    await adminService.deletePost(Number(req.params.id));
    res.status(204).end();
  } catch (e) { next(e); }
}
