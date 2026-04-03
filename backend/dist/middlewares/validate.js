import { ZodError } from 'zod';
import { badRequest } from '../utils/errors.js';
export function validate(schemas) {
    return (req, _res, next) => {
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
        }
        catch (error) {
            if (error instanceof ZodError) {
                const validationErrors = {};
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
