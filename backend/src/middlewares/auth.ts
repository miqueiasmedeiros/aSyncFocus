import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../utils/jwt.js';
import { unauthorized } from '../utils/errors.js';

export function authMiddleware(req: Request, _res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return next(unauthorized('Missing Authorization header'));
  }

  const [scheme, token] = authHeader.split(' ');
  if (scheme !== 'Bearer' || !token) {
    return next(unauthorized('Invalid Authorization header'));
  }

  try {
    const payload = verifyToken(token);
    req.user = payload;
    next();
  } catch {
    next(unauthorized('Invalid or expired token'));
  }
}

export function optionalAuthMiddleware(req: Request, _res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return next();
  }

  const [scheme, token] = authHeader.split(' ');
  if (scheme !== 'Bearer' || !token) {
    return next();
  }

  try {
    const payload = verifyToken(token);
    req.user = payload;
  } catch {
    // token inválido ignorado — trata como não autenticado
  }
  next();
}
