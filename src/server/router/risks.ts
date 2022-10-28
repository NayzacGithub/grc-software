import { createRouter } from "./context";
import z from "zod";
import { createRiskInputSchema, riskGetAllFilterSchema } from "../../validation/risks";
// import { registerSchema } from "../../validation/auth";

export const risksRouter = createRouter()
    .query("getAll", {
        input: riskGetAllFilterSchema,
        async resolve({ ctx, input }) {
            return await ctx.prisma.risk.findMany({
                include: {
                    FunctionRisk: {
                        include:{
                            function: true,
                        }
                    },
                }
            });
        }
    })
    .query("getRisk", {
        input: z.object({ riskId: z.string() }),
        async resolve({ ctx, input }) {
            return await ctx.prisma.risk.findUnique({
                where: {
                    id: input.riskId,
                },
                include: {
                    RiskControl: {
                        include: {
                            control: true
                        }
                    },
                    FunctionRisk: {
                        include: {
                            function: true
                        }
                    }
                }
            });
        }
    });