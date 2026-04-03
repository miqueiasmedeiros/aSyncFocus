import jwt, { type Secret, type SignOptions } from 'jsonwebtoken';
import { env } from '../config/env.js';

export interface JwtPayload {
  userId: number;
  email: string;
  role: string;
}

export function signToken(payload: JwtPayload): string {
  const options: SignOptions = { expiresIn: env.jwtExpiresIn as SignOptions['expiresIn'] };
  return jwt.sign(payload, env.jwtSecret as Secret, options);
}

export function verifyToken(token: string): JwtPayload {
  return jwt.verify(token, env.jwtSecret as Secret) as JwtPayload;
}
