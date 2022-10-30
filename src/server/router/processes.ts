import { createRouter } from "./context";

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
    });
