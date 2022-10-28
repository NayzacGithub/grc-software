import { createRouter } from "./context";
import z from "zod";
// This is the router for the global search component
export const searchRouter = createRouter()
    .query("q", {
        input: z.object({ query: z.string() }),
        async resolve({ ctx, input }) {
            // We need to search for the query in the following tables:
            // - controls
            // - risks
            // - functions
            const controls = await ctx.prisma.control.findMany({
                where: {
                    OR: [
                        { id: { contains: input.query } },
                        { name: { contains: input.query } },
                    ]
                }
            });
            const risks = await ctx.prisma.risk.findMany({
                where: {
                    OR: [
                        { id: { contains: input.query } },
                        { name: { contains: input.query } },
                    ]
                }
            });

            const functions = await ctx.prisma.function.findMany({
                where: {
                    OR: [
                        { id: { contains: input.query } },
                        { name: { contains: input.query } },
                    ]
                }
            });

            return {
                controls,
                risks,
                functions
            };
        }
    })