import type { VercelRequest, VercelResponse } from '@vercel/node';
import express from 'express';
import serverless from 'serverless-http';
import { createExpressMiddleware } from '@trpc/server/adapters/express';

// reuse your server context and router
import { createContext } from '../server/_core/context';
import { appRouter } from '../server/routers';

// build a tiny express app per invocation
const app = express();
app.use(express.json({ limit: '2mb' }));

app.use(
  '/api/trpc',
  createExpressMiddleware({
    router: appRouter,
    createContext
  })
);

// export a handler Vercel understands
const handler = serverless(app);
export default async function vercelHandler(req: VercelRequest, res: VercelResponse) {
  return handler(req as any, res as any);
}
