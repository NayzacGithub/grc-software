import { createRouter } from "./context";
// import { registerSchema } from "../../validation/auth";

export const rcmRouter = createRouter()
    .query("getAll", {
        async resolve({ ctx }) {
            return await ctx.prisma.process.findMany({
                include: {
                    risks: {
                        include: {
                            controls: true,
                        }
                    }
                }
            });
        }
    });