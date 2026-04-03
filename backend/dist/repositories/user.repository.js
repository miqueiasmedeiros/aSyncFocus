import { prisma } from '../config/prisma.js';
export function findUserByEmail(email) {
    return prisma.user.findUnique({ where: { email } });
}
export function findUserById(id) {
    return prisma.user.findUnique({ where: { id } });
}
export function createUser(data) {
    return prisma.user.create({ data });
}
export function updateUserProfile(userId, data) {
    return prisma.user.update({
        where: { id: userId },
        data: {
            name: data.name,
            avatarUrl: data.avatarUrl ?? null
        }
    });
}
export function markUserVerified(userId) {
    return prisma.user.update({
        where: { id: userId },
        data: { emailVerified: true }
    });
}
