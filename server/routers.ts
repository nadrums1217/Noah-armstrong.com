import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createDeal, getAllDeals } from "./db";

export const appRouter = router({
  system: systemRouter,

  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  deals: router({
    submit: publicProcedure
      .input(
        z.object({
          assetType: z.string().min(1),
          address: z.string().min(1),
          purchasePrice: z.string().optional(),
          additionalInfo: z.string().optional(),
          contactEmail: z.string().email(),
          contactPhone: z.string().optional(),
          contactName: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const deal = await createDeal({
          assetType: input.assetType,
          address: input.address,
          purchasePrice: input.purchasePrice || null,
          additionalInfo: input.additionalInfo || null,
          contactEmail: input.contactEmail,
          contactPhone: input.contactPhone || null,
          contactName: input.contactName || null,
        });
        return { success: true };
      }),
    list: publicProcedure.query(async () => {
      return await getAllDeals();
    }),
  }),
});

export type AppRouter = typeof appRouter;
