import { prisma } from '../config/prisma.js';
import { hashPassword } from '../utils/password.js';

export function adminListUsers() {
  return prisma.user.findMany({
    select: { id: true, name: true, email: true, avatarUrl: true, role: true, mustChangePassword: true, createdAt: true },
    orderBy: { createdAt: 'desc' }
  });
}

export function adminDeleteUser(userId: number) {
  return prisma.user.delete({ where: { id: userId } });
}

export function adminCreateUser(data: { name: string; email: string; password: string; role?: string }) {
  return hashPassword(data.password).then((hash) =>
    prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hash,
        role: (data.role === 'ADMIN' ? 'ADMIN' : 'USER') as any,
        emailVerified: true,
        mustChangePassword: true
      },
      select: { id: true, name: true, email: true, role: true, mustChangePassword: true, createdAt: true }
    })
  );
}

export function adminEditUser(userId: number, data: { name: string; email: string; role: string }) {
  return prisma.user.update({
    where: { id: userId },
    data: {
      name: data.name,
      email: data.email,
      role: (data.role === 'ADMIN' ? 'ADMIN' : 'USER') as any
    },
    select: { id: true, name: true, email: true, role: true, mustChangePassword: true, createdAt: true }
  });
}

export function adminDeletePost(postId: number) {
  return prisma.post.delete({ where: { id: postId } });
}

export function adminListPosts() {
  return prisma.post.findMany({
    include: { user: { select: { id: true, name: true, avatarUrl: true } }, topics: true },
    orderBy: { createdAt: 'desc' }
  });
}
