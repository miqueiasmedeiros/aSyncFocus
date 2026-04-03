import { prisma } from '../config/prisma.js';
export function upsertReaction(data) {
    return prisma.reaction.upsert({
        where: {
            postId_userId: {
                postId: data.postId,
                userId: data.userId
            }
        },
        create: data,
        update: { type: data.type }
    });
}
export function listReactionsByPostIds(postIds) {
    return prisma.reaction.groupBy({
        by: ['postId', 'type'],
        where: {
            postId: { in: postIds }
        },
        _count: { _all: true }
    });
}
