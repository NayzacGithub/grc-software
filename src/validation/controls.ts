import z from "zod";

export const controlGetAllFilterSchema = z.object({
    riskId: z.string().nullish()
});

export type ControlGetAllFilterSchema = z.TypeOf<typeof controlGetAllFilterSchema>;

