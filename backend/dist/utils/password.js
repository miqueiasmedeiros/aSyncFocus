import bcrypt from 'bcryptjs';
export async function hashPassword(value) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(value, salt);
}
export function comparePassword(value, hash) {
    return bcrypt.compare(value, hash);
}
