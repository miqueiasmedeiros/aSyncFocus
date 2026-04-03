import { badRequest, notFound } from '../utils/errors.js';
import {
  adminListUsers,
  adminDeleteUser,
  adminCreateUser,
  adminEditUser,
  adminDeletePost,
  adminListPosts
} from '../repositories/admin.repository.js';
import { findUserByEmail, findUserById } from '../repositories/user.repository.js';

export async function listUsers() {
  return adminListUsers();
}

export async function createUser(payload: { name: string; email: string; password: string; role?: string }) {
  const existing = await findUserByEmail(payload.email);
  if (existing) {
    throw badRequest('Validation failed', { email: 'E-mail already taken' });
  }
  return adminCreateUser(payload);
}

export async function editUser(userId: number, payload: { name: string; email: string; role: string }) {
  const user = await findUserById(userId);
  if (!user) throw notFound('User not found');
  const existing = await findUserByEmail(payload.email);
  if (existing && existing.id !== userId) {
    throw badRequest('Validation failed', { email: 'E-mail already taken' });
  }
  return adminEditUser(userId, payload);
}

export async function deleteUser(userId: number) {
  const user = await findUserById(userId);
  if (!user) throw notFound('User not found');
  await adminDeleteUser(userId);
}

export async function listPosts() {
  return adminListPosts();
}

export async function deletePost(postId: number) {
  await adminDeletePost(postId).catch(() => { throw notFound('Post not found'); });
}
