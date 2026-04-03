import { verifyToken } from '../utils/jwt.js';
import { unauthorized } from '../utils/errors.js';
export function authMiddleware(req, _res, next) {
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
    }
    catch {
        next(unauthorized('Invalid or expired token'));
    }
}
