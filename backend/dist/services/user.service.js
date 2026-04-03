import { notFound } from '../utils/errors.js';
import { updateUserProfile, findUserById } from '../repositories/user.repository.js';
export async function updateProfile(userId, payload) {
    const user = await findUserById(userId);
    if (!user) {
        throw notFound('User not found');
    }
    const updated = await updateUserProfile(userId, payload);
    return {
        id: updated.id,
        name: updated.name,
        email: updated.email,
        avatarUrl: updated.avatarUrl ?? null
    };
}
