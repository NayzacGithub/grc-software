import { z } from "zod";
import { controlGetAllFilterSchema } from "../../validation/controls";
import { createRouter } from "./context";
// import { registerSchema } from "../../validation/auth";

export const controlsRouter = createRouter()
    .query("getControl", {
        input: z.object({ controlId: z.string() }),
        async resolve({ ctx, input }) {
            return await ctx.prisma.control.findUnique({
                where: {
                    id: input.controlId
                },
                include: {
                    RiskControl: {
                        include: {
                            risk: true
                        }
                    }
                },
            })
        }
    });