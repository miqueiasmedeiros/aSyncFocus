import { NextFunction, Request, Response } from 'express';
import { ZodError, ZodSchema } from 'zod';
import { badRequest } from '../utils/errors.js';

export interface ValidationSchemas {
  body?: ZodSchema;
  params?: ZodSchema;
  query?: ZodSchema;
}

export function validate(schemas: ValidationSchemas) {
  return (req: Request, _res: Response, next: NextFunction): void => {
    try {
      if (schemas.body) {
        req.body = schemas.body.parse(req.body);
      }
      if (schemas.params) {
        req.params = schemas.params.parse(req.params);
      }
      if (schemas.query) {
        req.query = schemas.query.parse(req.query);
      }
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const validationErrors: Record<string, string> = {};
        error.errors.forEach((issue) => {
          const path = issue.path.join('.') || 'body';
          validationErrors[path] = issue.message;
        });
        next(badRequest('Validation failed', validationErrors));
        return;
      }
      next(error);
    }
  };
}
