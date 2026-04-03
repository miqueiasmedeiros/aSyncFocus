import { prisma } from '../config/prisma.js';

export function createPost(data: {
  userId: number;
  subject: string;
  content: string;
  topics: string[];
  imageUrl?: string | null;
}) {
  return prisma.post.create({
    data: {
      userId: data.userId,
      subject: data.subject,
      content: data.content,
      imageUrl: data.imageUrl ?? null,
      topics: {
        create: data.topics.map((topic) => ({ topic }))
      }
    },
    include: {
      user: true,
      topics: true
    }
  });
}

export function updatePost(postId: number, data: {
  subject: string;
  content: string;
  topics: string[];
  imageUrl?: string | null;
}) {
  return prisma.post.update({
    where: { id: postId },
    data: {
      subject: data.subject,
      content: data.content,
      imageUrl: data.imageUrl ?? null,
      topics: {
        deleteMany: {},
        create: data.topics.map((topic) => ({ topic }))
      }
    },
    include: {
      user: true,
      topics: true
    }
  });
}

export function deletePost(postId: number) {
  return prisma.post.delete({ where: { id: postId } });
}

export function findPostById(postId: number) {
  return prisma.post.findUnique({
    where: { id: postId },
    include: {
      user: true,
      topics: true
    }
  });
}

export function listPosts() {
  return prisma.post.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      user: true,
      topics: true
    }
  });
}
