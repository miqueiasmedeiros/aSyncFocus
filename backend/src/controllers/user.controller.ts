import { Request, Response, NextFunction } from 'express';
import { updateProfile, getProfile, changePassword } from '../services/user.service.js';

export async function getMe(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.user?.userId ?? 0;
    const result = await getProfile(userId);
    res.json(result);
  } catch (error) {
    next(error);
  }
}

export async function updateMe(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.user?.userId ?? 0;
    const result = await updateProfile(userId, req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
}

export async function changePasswordMe(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.user?.userId ?? 0;
    const result = await changePassword(userId, req.body.password);
    res.json(result);
  } catch (error) {
    next(error);
  }
}
