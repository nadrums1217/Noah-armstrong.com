import type { VercelRequest, VercelResponse } from '@vercel/node';
import express from 'express';
import serverless from 'serverless-http';

// reuse your route registrar and cookie utils
import { registerOAuthRoutes } from '../server/_core/oauth';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

registerOAuthRoutes(app); // mounts GET /api/oauth/callback

const handler = serverless(app);
export default async function vercelHandler(req: VercelRequest, res: VercelResponse) {
  return handler(req as any, res as any);
}
