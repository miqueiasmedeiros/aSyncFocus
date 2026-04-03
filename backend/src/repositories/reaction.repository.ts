import { prisma } from '../config/prisma.js';
import { ReactionType } from '@prisma/client';

export function upsertReaction(data: { postId: number; userId: number; type: ReactionType }) {
  return prisma.reaction.upsert({
    where: {
      postId_userId_type: {
        postId: data.postId,
        userId: data.userId,
        type: data.type
      }
    },
    create: data,
    update: {}
  });
}

export function deleteReaction(postId: number, userId: number, type: ReactionType) {
  return prisma.reaction.deleteMany({
    where: {
      postId,
      userId,
      type
    }
  });
}

export function listReactionsByPostIds(postIds: number[]) {
  return prisma.reaction.groupBy({
    by: ['postId', 'type'],
    where: {
      postId: { in: postIds }
    },
    _count: { _all: true }
  });
}

export function getUserReactionsByPostIds(userId: number, postIds: number[]) {
  return prisma.reaction.findMany({
    where: {
      userId,
      postId: { in: postIds }
    },
    select: { postId: true, type: true }
  });
}
