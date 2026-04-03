import { Router } from 'express';
import { authMiddleware } from '../middlewares/auth.js';
import { adminMiddleware } from '../middlewares/admin.js';
import { getUsers, createUser, editUser, deleteUser, getPosts, deletePost } from '../controllers/admin.controller.js';

export const adminRouter = Router();

adminRouter.use(authMiddleware, adminMiddleware);

adminRouter.get('/users', getUsers);
adminRouter.post('/users', createUser);
adminRouter.put('/users/:id', editUser);
adminRouter.delete('/users/:id', deleteUser);
adminRouter.get('/posts', getPosts);
adminRouter.delete('/posts/:id', deletePost);
