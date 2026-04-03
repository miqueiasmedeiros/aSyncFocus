import { ReactionType } from '@prisma/client';
import { notFound } from '../utils/errors.js';
import { deleteReaction, upsertReaction } from '../repositories/reaction.repository.js';
import { findPostById } from '../repositories/post.repository.js';

export async function reactToPost(userId: number, payload: { postId: number; type: ReactionType }) {
  const post = await findPostById(payload.postId);
  if (!post) {
    throw notFound('Post not found');
  }

  const reaction = await upsertReaction({
    postId: payload.postId,
    userId,
    type: payload.type
  });

  return {
    id: reaction.id,
    postId: reaction.postId,
    userId: reaction.userId,
    type: reaction.type
  };
}

export async function removeReaction(userId: number, postId: number, type: ReactionType) {
  const post = await findPostById(postId);
  if (!post) {
    throw notFound('Post not found');
  }

  await deleteReaction(postId, userId, type);
  return { message: 'Reaction removed' };
}
