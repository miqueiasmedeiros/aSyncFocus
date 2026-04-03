import type { User } from '@prisma/client';
import { notFound } from '../utils/errors.js';
import { updateUserProfile, findUserById } from '../repositories/user.repository.js';
import { hashPassword } from '../utils/password.js';
import { prisma } from '../config/prisma.js';

function mapUserProfile(user: User) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    avatarUrl: user.avatarUrl ?? null,
    role: user.role,
    mustChangePassword: user.mustChangePassword
  };
}

export async function getProfile(userId: number) {
  const user = await findUserById(userId);
  if (!user) throw notFound('User not found');
  return mapUserProfile(user);
}

export async function updateProfile(userId: number, payload: { name: string; avatarUrl?: string | null }) {
  const user = await findUserById(userId);
  if (!user) throw notFound('User not found');

  const updated = await updateUserProfile(userId, payload);
  return mapUserProfile(updated);
}

export async function changePassword(userId: number, newPassword: string) {
  const hash = await hashPassword(newPassword);
  const updated = await prisma.user.update({
    where: { id: userId },
    data: { password: hash, mustChangePassword: false }
  });
  return mapUserProfile(updated);
}
