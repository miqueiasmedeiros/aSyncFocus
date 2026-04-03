import { Request, Response, NextFunction } from 'express';
import multer from 'multer';
import path from 'path';
import { randomUUID } from 'crypto';
import fs from 'fs';

const UPLOADS_DIR = path.resolve('uploads');

if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
const MAX_FILE_SIZE_MB = 5;

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, UPLOADS_DIR),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, `${randomUUID()}${ext}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: MAX_FILE_SIZE_MB * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (ALLOWED_MIME_TYPES.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Tipo de arquivo não permitido. Use JPEG, PNG, GIF ou WebP.'));
    }
  }
});

export const uploadImageMiddleware = upload.single('image');

export function uploadImage(req: Request, res: Response, next: NextFunction): void {
  uploadImageMiddleware(req, res, (err) => {
    if (err) {
      return next(err);
    }
    if (!req.file) {
      res.status(400).json({ message: 'Nenhum arquivo enviado.' });
      return;
    }
    const host = `${req.protocol}://${req.get('host')}`;
    const url = `${host}/uploads/${req.file.filename}`;
    res.status(201).json({ url });
  });
}
