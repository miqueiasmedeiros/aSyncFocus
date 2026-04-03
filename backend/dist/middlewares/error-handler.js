import { ApiError } from '../utils/errors.js';
import { env } from '../config/env.js';
export function errorHandler(err, _req, res, _next) {
    if (err instanceof ApiError) {
        res.status(err.status).json({
            timestamp: new Date().toISOString(),
            status: err.status,
            error: err.error,
            message: err.message,
            validationErrors: err.validationErrors
        });
        return;
    }
    const message = err instanceof Error ? err.message : 'Unexpected error';
    const status = 500;
    const error = 'Internal Server Error';
    if (env.nodeEnv !== 'production') {
        console.error(err);
    }
    res.status(status).json({
        timestamp: new Date().toISOString(),
        status,
        error,
        message,
        validationErrors: null
    });
}
