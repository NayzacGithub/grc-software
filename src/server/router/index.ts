// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

// import { protectedExampleRouter } from "./protected-example-router";
import { authRouter } from "./auth";
import { risksRouter } from "./risks";
import { controlsRouter } from "./controls";
import { rcmRouter } from "./rcm";
import { processesRouter } from "./processes";
import { cosoRouter } from "./coso";
import { searchRouter } from "./search";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("auth.", authRouter)
  .merge("risks.", risksRouter)
  .merge("controls.", controlsRouter)
  .merge("rcm.", rcmRouter)
  .merge("processes.", processesRouter)
  .merge("coso.", cosoRouter)
  .merge("search.", searchRouter)
// .merge("auth.", protectedExampleRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
