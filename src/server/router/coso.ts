import { z } from "zod";
import { createRouter } from "./context";

export const cosoRouter = createRouter()
    .query("getAll", {
        async resolve({ ctx }) {
            return await ctx.prisma.cosoComponents.findMany({
                include: {
                    CosoPrinciples: {
                        include: {
                            CosoFocusPoints: true,
                        }
                    }
                }
            });
        }
    });