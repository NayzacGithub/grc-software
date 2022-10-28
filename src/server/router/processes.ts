import { createRouter } from "./context";
import z from "zod";

export const processesRouter = createRouter()
    .query("getAll", {
        async resolve({ ctx }) {
            return await ctx.prisma.function.findMany({
                include: {
                    _count: {
                    },
                    FunctionRisk: {
                        include: {
                            risk: true
                        }
                    }
                }
            });
        }
    })
    .query("modalDetails", {
        input: z.object({ functionId: z.string() }),
        async resolve({ ctx, input }) {
            return await ctx.prisma.process.findUnique({
                where: {
                    id: input.functionId,
                },
                include: {
                    _count: {
                        select: {
                            risks: true,
                        }
                    }
                }
            });
        }
    })
