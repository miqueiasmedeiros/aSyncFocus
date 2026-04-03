import { Request, Response, NextFunction } from 'express';
import { loginUser, registerUser, resendVerification, verifyEmail } from '../services/auth.service.js';

export async function register(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await registerUser(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await loginUser(req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
}

export async function verify(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await verifyEmail(String(req.query.token));
    res.json(result);
  } catch (error) {
    next(error);
  }
}

export async function resend(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await resendVerification(String(req.query.email));
    res.json(result);
  } catch (error) {
    next(error);
  }
}
