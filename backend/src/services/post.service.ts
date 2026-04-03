import { ReactionType } from '@prisma/client';
import { forbidden, notFound } from '../utils/errors.js';
import {
  createPost,
  deletePost,
  findPostById,
  listPosts,
  updatePost
} from '../repositories/post.repository.js';
import { countCommentsByPostIds } from '../repositories/comment.repository.js';
import { listReactionsByPostIds, getUserReactionsByPostIds } from '../repositories/reaction.repository.js';

interface PostResponse {
  id: number;
  userId: number;
  authorName: string;
  authorAvatarUrl: string | null;
  subject: string;
  content: string;
  topics: string[];
  imageUrl: string | null;
  createdAt: string;
  updatedAt: string;
  commentsCount: number;
  likeCount: number;
  loveCount: number;
  wowCount: number;
  hahaCount: number;
  userReactions: string[];
}

function mapPost(
  post: any,
  counts: { comments: number; like: number; love: number; wow: number; haha: number },
  userReactions: string[] = []
): PostResponse {
  return {
    id: post.id,
    userId: post.userId,
    authorName: post.user.name,
    authorAvatarUrl: post.user.avatarUrl ?? null,
    subject: post.subject,
    content: post.content,
    topics: post.topics.map((topic: any) => topic.topic),
    imageUrl: post.imageUrl ?? null,
    createdAt: post.createdAt.toISOString(),
    updatedAt: post.updatedAt.toISOString(),
    commentsCount: counts.comments,
    likeCount: counts.like,
    loveCount: counts.love,
    wowCount: counts.wow,
    hahaCount: counts.haha,
    userReactions
  };
}

async function buildCounts(postIds: number[]) {
  if (postIds.length === 0) {
    return new Map<number, { comments: number; like: number; love: number; wow: number; haha: number }>();
  }

  const [commentCounts, reactionCounts] = await Promise.all([
    countCommentsByPostIds(postIds),
    listReactionsByPostIds(postIds)
  ]);

  const map = new Map<number, { comments: number; like: number; love: number; wow: number; haha: number }>();

  postIds.forEach((id) => {
    map.set(id, { comments: 0, like: 0, love: 0, wow: 0, haha: 0 });
  });

  commentCounts.forEach((entry) => {
    const current = map.get(entry.postId) ?? { comments: 0, like: 0, love: 0, wow: 0, haha: 0 };
    current.comments = entry._count._all;
    map.set(entry.postId, current);
  });

  reactionCounts.forEach((entry) => {
    const current = map.get(entry.postId) ?? { comments: 0, like: 0, love: 0, wow: 0, haha: 0 };
    if (entry.type === ReactionType.LIKE) {
      current.like = entry._count._all;
    }
    if (entry.type === ReactionType.LOVE) {
      current.love = entry._count._all;
    }
    if (entry.type === ReactionType.WOW) {
      current.wow = entry._count._all;
    }
    if (entry.type === ReactionType.HAHA) {
      current.haha = entry._count._all;
    }
    map.set(entry.postId, current);
  });

  return map;
}

export async function listAllPosts(userId?: number): Promise<PostResponse[]> {
  const posts = await listPosts();
  const postIds = posts.map((post) => post.id);

  const [counts, userReactionsRaw] = await Promise.all([
    buildCounts(postIds),
    userId ? getUserReactionsByPostIds(userId, postIds) : Promise.resolve([])
  ]);

  const userReactionsMap = new Map<number, string[]>();
  userReactionsRaw.forEach((r) => {
    const existing = userReactionsMap.get(r.postId) ?? [];
    existing.push(r.type);
    userReactionsMap.set(r.postId, existing);
  });

  return posts.map((post) =>
    mapPost(
      post,
      counts.get(post.id) ?? { comments: 0, like: 0, love: 0, wow: 0, haha: 0 },
      userReactionsMap.get(post.id) ?? []
    )
  );
}

export async function createNewPost(
  userId: number,
  payload: { subject: string; content: string; topics: string[]; imageUrl?: string | null }
): Promise<PostResponse> {
  const post = await createPost({
    userId,
    subject: payload.subject,
    content: payload.content,
    topics: payload.topics,
    imageUrl: payload.imageUrl ?? null
  });

  return mapPost(post, { comments: 0, like: 0, love: 0, wow: 0, haha: 0 });
}

export async function updateExistingPost(
  userId: number,
  postId: number,
  payload: { subject: string; content: string; topics: string[]; imageUrl?: string | null }
): Promise<PostResponse> {
  const existing = await findPostById(postId);
  if (!existing) {
    throw notFound('Post not found');
  }
  if (existing.userId !== userId) {
    throw forbidden('Not the post owner');
  }

  const post = await updatePost(postId, payload);
  const counts = await buildCounts([postId]);
  return mapPost(post, counts.get(postId) ?? { comments: 0, like: 0, love: 0, wow: 0, haha: 0 });
}

export async function deleteExistingPost(userId: number, postId: number) {
  const existing = await findPostById(postId);
  if (!existing) {
    throw notFound('Post not found');
  }
  if (existing.userId !== userId) {
    throw forbidden('Not the post owner');
  }

  await deletePost(postId);
  return { message: 'Post deleted' };
}

export async function getPostById(postId: number, userId?: number): Promise<PostResponse> {
  const post = await findPostById(postId);
  if (!post) {
    throw notFound('Post not found');
  }

  const [counts, userReactionsRaw] = await Promise.all([
    buildCounts([postId]),
    userId ? getUserReactionsByPostIds(userId, [postId]) : Promise.resolve([])
  ]);

  const userReactions = userReactionsRaw.map((r) => r.type);
  return mapPost(post, counts.get(postId) ?? { comments: 0, like: 0, love: 0, wow: 0, haha: 0 }, userReactions);
}
