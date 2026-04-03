import express from 'express';
import cors from 'cors';
import { apiRouter } from './routes/index.js';
import { errorHandler } from './middlewares/error-handler.js';
import { env } from './config/env.js';
import { swaggerSpec } from './swagger.js';
import swaggerUi from 'swagger-ui-express';
import { notFound } from './utils/errors.js';
export const app = express();
app.use(cors({ origin: env.corsOrigin }));
app.use(express.json({ limit: '1mb' }));
app.use('/v3/api-docs', (_req, res) => res.json(swaggerSpec));
app.use('/swagger-ui.html', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(apiRouter);
app.use((_req, _res, next) => {
    next(notFound('Route not found'));
});
app.use(errorHandler);
