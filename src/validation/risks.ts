import z from "zod";
export const createRiskInputSchema = z.object({
    id: z.string().min(2),
    name: z.string().min(2),
    description: z.optional(z.string()),
    processId: z.string(),
    riskType: z.enum(["Strategic_Risk", "Operational_Risk", "Financial_Risk", "Compliance_Risk", "Reputational_Risk"]),
    //refine this to a number, throw an error if it's not a number
    inherentRisk: z.string().refine((data) => {
        return !isNaN(parseFloat(data));
    }),
    residualRisk: z.string().refine((data) => {
        return !isNaN(parseFloat(data));
    }),
    riskVelocity: z.string().refine((data) => {
        return !isNaN(parseInt(data));
    }),
    likelihood: z.string().refine((data) => {
        return !isNaN(parseInt(data));
    }),
    impact: z.string().refine((data) => {
        return !isNaN(parseInt(data));
    }),
    riskAppetite: z.string().refine((data) => {
        return !isNaN(parseInt(data));
    }),
    riskTolerance: z.string().refine((data) => {
        return !isNaN(parseInt(data));
    }),
});

export type CreateRiskInput = z.TypeOf<typeof createRiskInputSchema>;

export const riskGetAllFilterSchema = z.object({
    functionId: z.string().nullish()
});

export type RiskGetAllFilterSchema = z.TypeOf<typeof riskGetAllFilterSchema>;


export const riskAnalysisInputSchema = z.object({
    risk_id: z.string(),
    inherentImpact: z.string(),
    inherentLikelyhood: z.string(),
});

export type RiskAnalysisInput = z.TypeOf<typeof riskAnalysisInputSchema>;