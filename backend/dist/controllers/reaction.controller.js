import { reactToPost } from '../services/reaction.service.js';
export async function react(req, res, next) {
    try {
        const userId = req.user?.userId ?? 0;
        const reaction = await reactToPost(userId, req.body);
        res.status(201).json(reaction);
    }
    catch (error) {
        next(error);
    }
}
