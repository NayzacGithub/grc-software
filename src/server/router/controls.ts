import { controlGetAllFilterSchema } from "../../validation/controls";
import { createRouter } from "./context";
// import { registerSchema } from "../../validation/auth";

export const controlsRouter = createRouter()
    .query("getAll", {
        input: controlGetAllFilterSchema,
        async resolve({ ctx, input }) {
            return await ctx.prisma.control.findMany({
                where: {
                    riskId: input.riskId as string
                },
                include: {
                    risk: true,
                }
            });
        }
    });