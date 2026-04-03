import { forbidden, notFound } from '../utils/errors.js';
import {
  createComment,
  deleteComment,
  findCommentById,
  listCommentsByPost,
  updateComment
} from '../repositories/comment.repository.js';
import { findPostById } from '../repositories/post.repository.js';

interface CommentResponse {
  id: number;
  postId: number;
  userId: number;
  authorName: string;
  authorAvatarUrl: string | null;
  comment: string;
  createdAt: string;
}

interface CommentWithRelations {
  id: number;
  postId: number;
  userId: number;
  comment: string;
  createdAt: Date;
  user: { name: string; avatarUrl: string | null };
}

function mapComment(comment: CommentWithRelations): CommentResponse {
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

export async function addComment(userId: number, payload: { postId: number; comment: string }) {
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

export async function listComments(postId: number): Promise<CommentResponse[]> {
  const post = await findPostById(postId);
  if (!post) {
    throw notFound('Post not found');
  }

  const comments = await listCommentsByPost(postId);
  return comments.map(mapComment);
}

export async function editComment(userId: number, commentId: number, comment: string): Promise<CommentResponse> {
  const existing = await findCommentById(commentId);
  if (!existing) {
    throw notFound('Comment not found');
  }
  if (existing.userId !== userId) {
    throw forbidden('Not the comment owner');
  }

  const updated = await updateComment(commentId, comment);
  return mapComment(updated);
}

export async function removeComment(userId: number, commentId: number): Promise<void> {
  const existing = await findCommentById(commentId);
  if (!existing) {
    throw notFound('Comment not found');
  }
  if (existing.userId !== userId) {
    throw forbidden('Not the comment owner');
  }

  await deleteComment(commentId);
}
