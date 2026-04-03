import { prisma } from '../config/prisma.js';
export function createComment(data) {
    return prisma.comment.create({
        data,
        include: {
            user: true
        }
    });
}
export function listCommentsByPost(postId) {
    return prisma.comment.findMany({
        where: { postId },
        orderBy: { createdAt: 'asc' },
        include: { user: true }
    });
}
export function countCommentsByPostIds(postIds) {
    return prisma.comment.groupBy({
        by: ['postId'],
        where: {
            postId: { in: postIds }
        },
        _count: { _all: true }
    });
}
