import { router } from "../trpc";
import { buildsRouter } from "./buildsRouter";

export const appRouter = router({
  builds: buildsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
