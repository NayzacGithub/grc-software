import { createRouter } from "./context";
import z from "zod";
import { createRiskInputSchema, riskGetAllFilterSchema } from "../../validation/risks";

export const risksRouter = createRouter()
    .query("getAll", {
        input: riskGetAllFilterSchema,
        async resolve({ ctx, input }) {
            return await ctx.prisma.risk.findMany({
                include: {
                    FunctionRisk: {
                        include: {
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
    })
    .mutation("createRisk", {
        input: z.object({
            id: z.string(),
            name: z.string(),
            description: z.string(),
            owner: z.optional(z.string()),
            category: z.optional(z.enum(['Strategic_Risk', 'Operational_Risk', 'Financial_Risk', 'Compliance_Risk', 'Reputational_Risk',])),
            function_id: z.string(),
        }),
        async resolve({ ctx, input }) {
            return await ctx.prisma.risk.create({
                data: {
                    id: input.id,
                    name: input.name,
                    description: input.description,
                    riskType: input.category,
                    owner: input.owner,
                    FunctionRisk: {
                        create: {
                            function_id: input.function_id,
                        }
                    }

                }
            })
        }
    })
    .mutation("riskAnalysis", {
        input: z.object({
            risk_id: z.string(),
            inherentImpact: z.string(),
            inherentLikelyhood: z.string(),
        }),
        async resolve({ ctx, input }) {
            return await ctx.prisma.risk.update({
                where: {
                    id: input.risk_id,
                },
                data: {
                    inherentImpact: parseInt(input.inherentImpact),
                    inherentLikelyhood: parseInt(input.inherentLikelyhood),
                }
            })
        },
    })