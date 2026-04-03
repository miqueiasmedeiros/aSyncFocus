import { loginUser, registerUser, resendVerification, verifyEmail } from '../services/auth.service.js';
export async function register(req, res, next) {
    try {
        const result = await registerUser(req.body);
        res.status(201).json(result);
    }
    catch (error) {
        next(error);
    }
}
export async function login(req, res, next) {
    try {
        const result = await loginUser(req.body);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
}
export async function verify(req, res, next) {
    try {
        const result = await verifyEmail(String(req.query.token));
        res.json(result);
    }
    catch (error) {
        next(error);
    }
}
export async function resend(req, res, next) {
    try {
        const result = await resendVerification(String(req.query.email));
        res.json(result);
    }
    catch (error) {
        next(error);
    }
}
