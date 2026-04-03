import { comparePassword, hashPassword } from '../utils/password.js';
import { signToken } from '../utils/jwt.js';
import { badRequest, unauthorized } from '../utils/errors.js';
import { createUser, findUserByEmail } from '../repositories/user.repository.js';
export async function registerUser(payload) {
    const existing = await findUserByEmail(payload.email);
    if (existing) {
        throw badRequest('Validation failed', { email: 'E-mail already taken' });
    }
    const passwordHash = await hashPassword(payload.password);
    await createUser({
        name: payload.name,
        email: payload.email,
        password: passwordHash
    });
    return { message: 'User registered. Email verification disabled in dev mode.' };
}
export async function loginUser(payload) {
    const user = await findUserByEmail(payload.email);
    if (!user) {
        throw unauthorized('Invalid credentials');
    }
    const isValid = await comparePassword(payload.password, user.password);
    if (!isValid) {
        throw unauthorized('Invalid credentials');
    }
    const token = signToken({ userId: user.id, email: user.email });
    return { token, tokenType: 'Bearer' };
}
export async function verifyEmail(_token) {
    return { message: 'Email verification disabled in dev mode.' };
}
export async function resendVerification(_email) {
    return { message: 'Email verification disabled in dev mode.' };
}
