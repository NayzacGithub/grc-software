import { createRouter } from "./context";
import z from "zod";
import { createRiskInputSchema, riskGetAllFilterSchema } from "../../validation/risks";
// import { registerSchema } from "../../validation/auth";

export const risksRouter = createRouter()
    .query("getAll", {
        input: riskGetAllFilterSchema,
        async resolve({ ctx, input }) {
            return await ctx.prisma.risk.findMany({
                where: {
                    processId: input.functionId as string
                },
                include: {
                    process: true,
                }
            });
        }
    })
    .query("modalDetails", {
        input: z.object({ riskId: z.string() }),
        async resolve({ ctx, input }) {
            return await ctx.prisma.risk.findUnique({
                where: {
                    id: input.riskId,
                },
                include: {
                    process: true,
                    _count: {
                        select: {
                            controls: true,
                        }
                    }
                }
            });
        }
    })
    .mutation("createRisk", {
        input: createRiskInputSchema,
        async resolve({ ctx, input }) {
            return await ctx.prisma.risk.create({
                data: {
                    id: input.id,
                    name: input.name,
                    description: input.description,
                    riskType: input.riskType,
                    inherentRisk: parseFloat(input.inherentRisk),
                    residualRisk: parseFloat(input.residualRisk),
                    riskVelocity: parseInt(input.riskVelocity),
                    likelihood: parseInt(input.likelihood),
                    impact: parseInt(input.impact),
                    riskAppetite: parseInt(input.riskAppetite),
                    riskTolerance: parseInt(input.riskTolerance),
                    process: {
                        connect: {
                            id: input.processId,
                        }
                    }
                },
            });
        }
    });