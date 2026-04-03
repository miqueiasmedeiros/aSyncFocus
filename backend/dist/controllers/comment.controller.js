import { addComment, listComments } from '../services/comment.service.js';
export async function create(req, res, next) {
    try {
        const userId = req.user?.userId ?? 0;
        const comment = await addComment(userId, req.body);
        res.status(201).json(comment);
    }
    catch (error) {
        next(error);
    }
}
export async function list(req, res, next) {
    try {
        const postId = Number(req.params.postId);
        const comments = await listComments(postId);
        res.json(comments);
    }
    catch (error) {
        next(error);
    }
}
