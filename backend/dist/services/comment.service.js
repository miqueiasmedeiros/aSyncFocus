import { notFound } from '../utils/errors.js';
import { createComment, listCommentsByPost } from '../repositories/comment.repository.js';
import { findPostById } from '../repositories/post.repository.js';
function mapComment(comment) {
    return {
        id: comment.id,
        postId: comment.postId,
        userId: comment.userId,
        authorName: comment.user.name,
        authorAvatarUrl: comment.user.avatarUrl ?? null,
        comment: comment.comment,
        createdAt: comment.createdAt.toISOString()
    };
}
export async function addComment(userId, payload) {
    const post = await findPostById(payload.postId);
    if (!post) {
        throw notFound('Post not found');
    }
    const comment = await createComment({
        postId: payload.postId,
        userId,
        comment: payload.comment
    });
    return mapComment(comment);
}
export async function listComments(postId) {
    const post = await findPostById(postId);
    if (!post) {
        throw notFound('Post not found');
    }
    const comments = await listCommentsByPost(postId);
    return comments.map(mapComment);
}
