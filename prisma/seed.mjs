import { functions_catalog, risks, controls, control_raci, function_risk_mapping, risk_control_mapping, assertions, coso_components, coso_focus_points, coso_principles,  control_coso } from "./data.js";
import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient()


async function main() {
    await prisma.Function.deleteMany({});
    await prisma.Risk.deleteMany({});
    await prisma.Control.deleteMany({});
    await prisma.FunctionRisk.deleteMany({});
    await prisma.RiskControl.deleteMany({});
    await prisma.Assertion.deleteMany({});
    await prisma.ControlRACI.deleteMany({});
    await prisma.ControlCoso.deleteMany({});
    await prisma.CosoComponents.deleteMany({});
    await prisma.CosoPrinciples.deleteMany({});
    await prisma.CosoFocusPoints.deleteMany({});


    await prisma.Function.createMany({
        data: functions_catalog,
        skipDuplicates: true,
    });
    console.log("🌱 Seeded Functions");

    await prisma.Risk.createMany({
        data: risks,
        skipDuplicates: true,
    });
    console.log("🌱 Seeded Risks");

    await prisma.Control.createMany({
        data: controls,
        skipDuplicates: true,
    });
    console.log("🌱 Seeded Controls");

    await prisma.FunctionRisk.createMany({
        data: function_risk_mapping,
        skipDuplicates: true,
    });
    console.log("🌱 Seeded Function-Risk Mapping");

    await prisma.RiskControl.createMany({
        data: risk_control_mapping,
        skipDuplicates: true,
    });
    console.log("🌱 Seeded Risk-Control Mapping");

    await prisma.Assertion.createMany({
        data: assertions,
        skipDuplicates: true,
    });
    console.log("🌱 Seeded Assertion");

    await prisma.ControlRACI.createMany({
        data: control_raci,
        skipDuplicates: true,
    });
    console.log("🌱 Seeded Control-RACI Mapping");

    await prisma.CosoComponents.createMany({
        data: coso_components,
        skipDuplicates: true,
    });
    console.log("🌱 Seeded COSO Components");

    await prisma.CosoPrinciples.createMany({
        data: coso_principles,
        skipDuplicates: true,
    });
    console.log("🌱 Seeded COSO Principles");

    await prisma.CosoFocusPoints.createMany({
        data: coso_focus_points,
        skipDuplicates: true,
    });
    console.log("🌱 Seeded COSO Focus Points");

    await prisma.ControlCoso.createMany({
        data: control_coso,
        skipDuplicates: true,
    })
    console.log("🌱 Seeded Control-COSO Mapping");





    // await prisma.user.create({
    //     data: {
    //         email: "admin@pianat.ai",
    //         password: "admin",
    //         name: "Admin",
    //     }
    // });
}


main()
    .then(async () => {
        console.log("Done");
        await prisma.$disconnect();
        process.exit(0);
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });