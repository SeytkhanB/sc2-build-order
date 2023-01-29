import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const buildsRouter = router({
  createBuild: publicProcedure
    .input(
      z.object({
        matchUp: z.string(),
        build: z.string(),
        style: z.string(),
        desc: z.string(),
        author: z.string(),
        title: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const build = await ctx.prisma.buildOrder.create({
        data: {
          matchUp: input.matchUp,
          build: input.build,
          style: input.style,
          author: input.author,
          desc: input.desc,
          title: input.title,
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
  getBuildById: publicProcedure
    .input(z.object({ buildId: z.string() }))
    .query(async ({ input, ctx }) => {
      const build = await ctx.prisma.buildOrder.findUnique({
        where: {
          id: input.buildId,
        },
      });
      return build;
    }),
});
