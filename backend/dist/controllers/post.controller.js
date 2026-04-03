import { createNewPost, deleteExistingPost, getPostById, listAllPosts, updateExistingPost } from '../services/post.service.js';
export async function list(req, res, next) {
    try {
        const posts = await listAllPosts();
        res.json(posts);
    }
    catch (error) {
        next(error);
    }
}
export async function create(req, res, next) {
    try {
        const userId = req.user?.userId ?? 0;
        const post = await createNewPost(userId, req.body);
        res.status(201).json(post);
    }
    catch (error) {
        next(error);
    }
}
export async function update(req, res, next) {
    try {
        const userId = req.user?.userId ?? 0;
        const postId = Number(req.params.id);
        const post = await updateExistingPost(userId, postId, req.body);
        res.json(post);
    }
    catch (error) {
        next(error);
    }
}
export async function remove(req, res, next) {
    try {
        const userId = req.user?.userId ?? 0;
        const postId = Number(req.params.id);
        const result = await deleteExistingPost(userId, postId);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
}
export async function getById(req, res, next) {
    try {
        const postId = Number(req.params.id);
        const post = await getPostById(postId);
        res.json(post);
    }
    catch (error) {
        next(error);
    }
}
