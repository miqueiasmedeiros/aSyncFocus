import { notFound } from '../utils/errors.js';
import { upsertReaction } from '../repositories/reaction.repository.js';
import { findPostById } from '../repositories/post.repository.js';
export async function reactToPost(userId, payload) {
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
