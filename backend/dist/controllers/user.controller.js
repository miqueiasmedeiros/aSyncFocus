import { updateProfile } from '../services/user.service.js';
export async function updateMe(req, res, next) {
    try {
        const userId = req.user?.userId ?? 0;
        const result = await updateProfile(userId, req.body);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
}
