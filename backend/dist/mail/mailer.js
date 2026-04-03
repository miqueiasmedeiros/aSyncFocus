import nodemailer from 'nodemailer';
import { env } from '../config/env.js';
const transporter = env.smtp.host
    ? nodemailer.createTransport({
        host: env.smtp.host,
        port: env.smtp.port,
        secure: env.smtp.port === 465,
        auth: env.smtp.user
            ? {
                user: env.smtp.user,
                pass: env.smtp.password
            }
            : undefined
    })
    : nodemailer.createTransport({ jsonTransport: true });
export async function sendVerificationEmail(to, token) {
    const verifyLink = `${env.appVerifyUrl}${token}`;
    await transporter.sendMail({
        from: env.mailFrom,
        to,
        subject: 'Verify your email',
        html: `
      <p>Olá!</p>
      <p>Para verificar seu email, clique no link abaixo:</p>
      <p><a href="${verifyLink}">${verifyLink}</a></p>
    `
    });
}
