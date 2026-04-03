import request from 'supertest';
import { app } from '../src/app.js';
import { prisma } from '../src/config/prisma.js';
beforeAll(async () => {
    await prisma.reaction.deleteMany();
    await prisma.comment.deleteMany();
    await prisma.postTopic.deleteMany();
    await prisma.post.deleteMany();
    await prisma.emailVerificationToken.deleteMany();
    await prisma.user.deleteMany();
});
afterAll(async () => {
    await prisma.$disconnect();
});
describe('Auth', () => {
    it('returns validation error for invalid payload', async () => {
        const res = await request(app).post('/auth/register').send({
            name: 'A',
            email: 'invalid',
            password: '123'
        });
        expect(res.status).toBe(400);
        expect(res.body.error).toBe('Bad Request');
        expect(res.body.validationErrors).toBeTruthy();
    });
    it('registers a new user', async () => {
        const res = await request(app).post('/auth/register').send({
            name: 'Alice Test',
            email: `alice${Date.now()}@company.local`,
            password: 's3cr3t!!'
        });
        expect(res.status).toBe(201);
        expect(res.body.message).toBeTruthy();
    });
});
