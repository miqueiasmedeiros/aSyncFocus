export type ValidationErrors = Record<string, string> | null;

export class ApiError extends Error {
  status: number;
  error: string;
  validationErrors: ValidationErrors;

  constructor(status: number, message: string, error: string, validationErrors: ValidationErrors = null) {
    super(message);
    this.status = status;
    this.error = error;
    this.validationErrors = validationErrors;
  }
}

export function badRequest(message: string, validationErrors: ValidationErrors = null): ApiError {
  return new ApiError(400, message, 'Bad Request', validationErrors);
}

export function unauthorized(message = 'Unauthorized'): ApiError {
  return new ApiError(401, message, 'Unauthorized');
}

export function forbidden(message = 'Forbidden'): ApiError {
  return new ApiError(403, message, 'Forbidden');
}

export function notFound(message = 'Not Found'): ApiError {
  return new ApiError(404, message, 'Not Found');
}
