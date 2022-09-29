import { createRouter } from "./context";
import { registerSchema } from "../../validation/auth";

export const authRouter = createRouter()
    .mutation("register", {
        input: registerSchema,
        async resolve({ ctx, input }) {
            const newUser = await ctx.prisma.user.create({
                data: {
                    email: input.email,
                    password: input.password,
                    name: input.name,
                }
            });
            return newUser;
        },
    });
