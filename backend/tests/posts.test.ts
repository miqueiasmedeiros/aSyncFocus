import request from 'supertest';
import { app } from '../src/app.js';
import { prisma } from '../src/config/prisma.js';
import { hashPassword } from '../src/utils/password.js';

beforeAll(async () => {
  await prisma.reaction.deleteMany();
  await prisma.comment.deleteMany();
  await prisma.postTopic.deleteMany();
  await prisma.post.deleteMany();
  await prisma.emailVerificationToken.deleteMany();
  await prisma.user.deleteMany();

  const password = await hashPassword('s3cr3t!!');
  const user = await prisma.user.create({
    data: {
      name: 'Post Owner',
      email: 'owner@company.local',
      password,
      emailVerified: true
    }
  });

  await prisma.post.create({
    data: {
      userId: user.id,
      subject: 'Hello',
      content: 'First post',
      topics: {
        create: [{ topic: 'general' }]
      }
    }
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe('Posts', () => {
  it('lists posts', async () => {
    const res = await request(app).get('/posts');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
