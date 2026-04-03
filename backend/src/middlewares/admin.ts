import { NextFunction, Request, Response } from 'express';
import { forbidden } from '../utils/errors.js';

export function adminMiddleware(req: Request, _res: Response, next: NextFunction): void {
  if (req.user?.role !== 'ADMIN') {
    return next(forbidden('Admin access required'));
  }
  next();
}
