import { ReactionType } from '@prisma/client';
import { forbidden, notFound } from '../utils/errors.js';
import { createPost, deletePost, findPostById, listPosts, updatePost } from '../repositories/post.repository.js';
import { countCommentsByPostIds } from '../repositories/comment.repository.js';
import { listReactionsByPostIds } from '../repositories/reaction.repository.js';
function mapPost(post, counts) {
    return {
        id: post.id,
        userId: post.userId,
        authorName: post.user.name,
        authorAvatarUrl: post.user.avatarUrl ?? null,
        subject: post.subject,
        content: post.content,
        topics: post.topics.map((topic) => topic.topic),
        imageUrl: post.imageUrl ?? null,
        createdAt: post.createdAt.toISOString(),
        updatedAt: post.updatedAt.toISOString(),
        commentsCount: counts.comments,
        likeCount: counts.like,
        loveCount: counts.love
    };
}
async function buildCounts(postIds) {
    if (postIds.length === 0) {
        return new Map();
    }
    const [commentCounts, reactionCounts] = await Promise.all([
        countCommentsByPostIds(postIds),
        listReactionsByPostIds(postIds)
    ]);
    const map = new Map();
    postIds.forEach((id) => {
        map.set(id, { comments: 0, like: 0, love: 0 });
    });
    commentCounts.forEach((entry) => {
        const current = map.get(entry.postId) ?? { comments: 0, like: 0, love: 0 };
        current.comments = entry._count._all;
        map.set(entry.postId, current);
    });
    reactionCounts.forEach((entry) => {
        const current = map.get(entry.postId) ?? { comments: 0, like: 0, love: 0 };
        if (entry.type === ReactionType.LIKE) {
            current.like = entry._count._all;
        }
        if (entry.type === ReactionType.LOVE) {
            current.love = entry._count._all;
        }
        map.set(entry.postId, current);
    });
    return map;
}
export async function listAllPosts() {
    const posts = await listPosts();
    const postIds = posts.map((post) => post.id);
    const counts = await buildCounts(postIds);
    return posts.map((post) => mapPost(post, counts.get(post.id) ?? { comments: 0, like: 0, love: 0 }));
}
export async function createNewPost(userId, payload) {
    const post = await createPost({
        userId,
        subject: payload.subject,
        content: payload.content,
        topics: payload.topics,
        imageUrl: payload.imageUrl ?? null
    });
    return mapPost(post, { comments: 0, like: 0, love: 0 });
}
export async function updateExistingPost(userId, postId, payload) {
    const existing = await findPostById(postId);
    if (!existing) {
        throw notFound('Post not found');
    }
    if (existing.userId !== userId) {
        throw forbidden('Not the post owner');
    }
    const post = await updatePost(postId, payload);
    const counts = await buildCounts([postId]);
    return mapPost(post, counts.get(postId) ?? { comments: 0, like: 0, love: 0 });
}
export async function deleteExistingPost(userId, postId) {
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
export async function getPostById(postId) {
    const post = await findPostById(postId);
    if (!post) {
        throw notFound('Post not found');
    }
    const counts = await buildCounts([postId]);
    return mapPost(post, counts.get(postId) ?? { comments: 0, like: 0, love: 0 });
}
