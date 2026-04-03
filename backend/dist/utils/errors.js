export class ApiError extends Error {
    status;
    error;
    validationErrors;
    constructor(status, message, error, validationErrors = null) {
        super(message);
        this.status = status;
        this.error = error;
        this.validationErrors = validationErrors;
    }
}
export function badRequest(message, validationErrors = null) {
    return new ApiError(400, message, 'Bad Request', validationErrors);
}
export function unauthorized(message = 'Unauthorized') {
    return new ApiError(401, message, 'Unauthorized');
}
export function forbidden(message = 'Forbidden') {
    return new ApiError(403, message, 'Forbidden');
}
export function notFound(message = 'Not Found') {
    return new ApiError(404, message, 'Not Found');
}
