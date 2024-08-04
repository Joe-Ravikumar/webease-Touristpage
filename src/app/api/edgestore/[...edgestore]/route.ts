import { initEdgeStore } from "@edgestore/server";
import { createEdgeStoreNextHandler } from "@edgestore/server/adapters/next/app";
import { z } from "zod";
const es = initEdgeStore.create();
/**
 * This is the main router for the Edge Store buckets.
 */
const edgeStoreRouter = es.router({
  publicFiles: es.fileBucket({ maxSize: 1024 * 1024 * 20 }),
  // protectedFiles: es
  //   .fileBucket({ maxSize: 1024 * 1024 * 20 })
  //   .path(({ ctx }) => [{ owner: ctx.userID }])
  //   .accessControl({
  //     OR: ([
  //       {
  //         // this will make sure that only the author of the file can access it
  //         userId: { path: "owner" },
  //       },
  //       {
  //         // or if the user is an admin
  //         userRole: {
  //           eq: "admin",
  //         }, // same as { userRole: 'admin' }
  //       },
  //     ])[],
  //   }),
  publicimages: es
    .imageBucket({
      maxSize: 1024 * 1024 * 1,
    })
    .input(z.object({ type: z.enum(["post", "profile"]) }))
    .path(({ input }) => [{ type: input.type }]),
});

const handler = createEdgeStoreNextHandler({
  router: edgeStoreRouter,
});
export { handler as GET, handler as POST };
/**
 * This type is used to create the type-safe client for the frontend.
 */
export type EdgeStoreRouter = typeof edgeStoreRouter;
