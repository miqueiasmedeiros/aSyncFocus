import { prisma } from '../config/prisma.js';

export function createVerificationToken(userId: number, token: string, expirationDate: Date) {
  return prisma.emailVerificationToken.create({
    data: {
      userId,
      token,
      expirationDate
    }
  });
}

export function findVerificationToken(token: string) {
  return prisma.emailVerificationToken.findUnique({ where: { token } });
}

export function deleteVerificationToken(id: number) {
  return prisma.emailVerificationToken.delete({ where: { id } });
}

export function deleteTokensForUser(userId: number) {
  return prisma.emailVerificationToken.deleteMany({ where: { userId } });
}
