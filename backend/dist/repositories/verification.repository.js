import { prisma } from '../config/prisma.js';
export function createVerificationToken(userId, token, expirationDate) {
    return prisma.emailVerificationToken.create({
        data: {
            userId,
            token,
            expirationDate
        }
    });
}
export function findVerificationToken(token) {
    return prisma.emailVerificationToken.findUnique({ where: { token } });
}
export function deleteVerificationToken(id) {
    return prisma.emailVerificationToken.delete({ where: { id } });
}
export function deleteTokensForUser(userId) {
    return prisma.emailVerificationToken.deleteMany({ where: { userId } });
}
