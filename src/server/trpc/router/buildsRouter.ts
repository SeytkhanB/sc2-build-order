import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const buildsRouter = router({
  createBuild: publicProcedure
    .input(z.object({ matchUp: z.string(), build: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const build = await ctx.prisma.buildOrder.create({
        data: {
          ...input,
        },
      });

      return build;
    }),
  getBuildsByMatchUp: publicProcedure
    .input(z.object({ matchUp: z.string() }))
    .query(async ({ input, ctx }) => {
      const builds = await ctx.prisma.buildOrder.findMany({
        where: {
          matchUp: input.matchUp,
        },
      });
      return builds;
    }),
});
