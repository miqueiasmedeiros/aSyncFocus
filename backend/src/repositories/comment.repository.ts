import { prisma } from '../config/prisma.js';

export function createComment(data: { postId: number; userId: number; comment: string }) {
  return prisma.comment.create({
    data,
    include: {
      user: true
    }
  });
}

export function listCommentsByPost(postId: number) {
  return prisma.comment.findMany({
    where: { postId },
    orderBy: { createdAt: 'asc' },
    include: { user: true }
  });
}

export function countCommentsByPostIds(postIds: number[]) {
  return prisma.comment.groupBy({
    by: ['postId'],
    where: {
      postId: { in: postIds }
    },
    _count: { _all: true }
  });
}

export function findCommentById(id: number) {
  return prisma.comment.findUnique({ where: { id } });
}

export function updateComment(id: number, comment: string) {
  return prisma.comment.update({
    where: { id },
    data: { comment },
    include: { user: true }
  });
}

export function deleteComment(id: number) {
  return prisma.comment.delete({ where: { id } });
}
