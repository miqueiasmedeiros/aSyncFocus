import crypto from 'crypto';
import { comparePassword, hashPassword } from '../utils/password.js';
import { signToken } from '../utils/jwt.js';
import { badRequest, unauthorized } from '../utils/errors.js';
import { createUser, findUserByEmail, markUserVerified } from '../repositories/user.repository.js';
import {
  createVerificationToken,
  deleteTokensForUser,
  deleteVerificationToken,
  findVerificationToken
} from '../repositories/verification.repository.js';
import { sendVerificationEmail } from '../mail/mailer.js';

const TOKEN_EXPIRY_HOURS = 24;
const HOUR_IN_MS = 3_600_000;

function generateToken(): string {
  return crypto.randomBytes(32).toString('hex');
}

function tokenExpiryDate(): Date {
  return new Date(Date.now() + TOKEN_EXPIRY_HOURS * HOUR_IN_MS);
}

export async function registerUser(payload: { name: string; email: string; password: string }) {
  const existing = await findUserByEmail(payload.email);
  if (existing) {
    throw badRequest('Validation failed', { email: 'E-mail already taken' });
  }

  const passwordHash = await hashPassword(payload.password);
  const user = await createUser({
    name: payload.name,
    email: payload.email,
    password: passwordHash
  });

  const token = generateToken();
  const expirationDate = tokenExpiryDate();
  await createVerificationToken(user.id, token, expirationDate);
  await sendVerificationEmail(user.email, token);

  return { message: 'Conta criada! Verifique seu e-mail para ativar o acesso.' };
}

export async function loginUser(payload: { email: string; password: string }) {
  const user = await findUserByEmail(payload.email);
  if (!user) {
    throw unauthorized('Invalid credentials');
  }

  const isValid = await comparePassword(payload.password, user.password);
  if (!isValid) {
    throw unauthorized('Invalid credentials');
  }

  if (!user.emailVerified) {
    throw unauthorized('E-mail não verificado. Verifique sua caixa de entrada.');
  }

  const token = signToken({ userId: user.id, email: user.email, role: user.role });
  return { token, tokenType: 'Bearer' };
}

export async function verifyEmail(token: string) {
  if (!token) throw badRequest('Token inválido');

  const record = await findVerificationToken(token);
  if (!record) throw badRequest('Token inválido ou expirado');
  if (record.expirationDate < new Date()) {
    await deleteVerificationToken(record.id);
    throw badRequest('Token expirado. Solicite um novo e-mail de verificação.');
  }

  await markUserVerified(record.userId);
  await deleteVerificationToken(record.id);

  return { message: 'E-mail verificado com sucesso! Você já pode fazer login.' };
}

export async function resendVerification(email: string) {
  if (!email) throw badRequest('E-mail obrigatório');

  const user = await findUserByEmail(email);
  // Return same message whether user exists or not (avoids user enumeration)
  if (!user || user.emailVerified) {
    return { message: 'Se o e-mail existir e ainda não for verificado, um novo link será enviado.' };
  }

  await deleteTokensForUser(user.id);
  const token = generateToken();
  const expirationDate = tokenExpiryDate();
  await createVerificationToken(user.id, token, expirationDate);
  await sendVerificationEmail(user.email, token);

  return { message: 'Se o e-mail existir e ainda não for verificado, um novo link será enviado.' };
}
