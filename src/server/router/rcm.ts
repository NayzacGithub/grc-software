import { createRouter } from "./context";
export const rcmRouter = createRouter()
    .query("getAll", {
        async resolve({ ctx }) {
            return await ctx.prisma.functionRisk.findMany({
                include: {
                    risk: {
                        include: {
                            RiskControl: {
                                include: {
                                    control: {
                                        include: {
                                            ControlRACI: true,
                                            Assertion: true,
                                        }
                                    },
                                }
                            },
                        }
                    },
                    function: true,
                }
            });
        }
    })
    .query("betaAll", {
        async resolve({ ctx }) {
            return await ctx.prisma.risk.findMany({
                include: {
                    RiskControl: {
                        include: {
                            control: {
                                include: {
                                    ControlRACI: true,
                                    Assertion: true,
                                    ControlCoso: {
                                        include: {
                                            component: {
                                                include: {
                                                    CosoPrinciples: {
                                                        include: {
                                                            CosoFocusPoints: true,
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                            }
                        },
                    },
                    FunctionRisk: {
                        include: {
                            function: true,
                        }
                    }
                }
            });
        }
    })