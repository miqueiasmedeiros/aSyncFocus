import dotenv from 'dotenv';
dotenv.config();
export const env = {
    nodeEnv: process.env.NODE_ENV ?? 'development',
    port: Number(process.env.PORT ?? 8080),
    databaseUrl: process.env.DATABASE_URL ?? '',
    jwtSecret: process.env.JWT_SECRET ?? 'change-me',
    jwtExpiresIn: process.env.JWT_EXPIRES_IN ?? '1d',
    appVerifyUrl: process.env.APP_VERIFY_URL ?? 'http://localhost:4200/verify-email?token=',
    corsOrigin: process.env.CORS_ORIGIN ?? 'http://localhost:4200',
    smtp: {
        host: process.env.SMTP_HOST ?? '',
        port: Number(process.env.SMTP_PORT ?? 587),
        user: process.env.SMTP_USER ?? '',
        password: process.env.SMTP_PASSWORD ?? ''
    },
    mailFrom: process.env.APP_MAIL_FROM ?? 'no-reply@company.local'
};
