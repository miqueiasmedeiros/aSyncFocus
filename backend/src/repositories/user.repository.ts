import { prisma } from '../config/prisma.js';

export function findUserByEmail(email: string) {
  return prisma.user.findUnique({ where: { email } });
}

export function findUserById(id: number) {
  return prisma.user.findUnique({ where: { id } });
}

export function createUser(data: { name: string; email: string; password: string }) {
  return prisma.user.create({ data });
}

export function updateUserProfile(userId: number, data: { name: string; avatarUrl?: string | null }) {
  return prisma.user.update({
    where: { id: userId },
    data: {
      name: data.name,
      avatarUrl: data.avatarUrl ?? null
    }
  });
}

export function markUserVerified(userId: number) {
  return prisma.user.update({
    where: { id: userId },
    data: { emailVerified: true }
  });
}
