import { processes, risks, controls } from "./data";
import { PrismaClient, Prisma } from '@prisma/client'
import { create } from "domain";

const prisma = new PrismaClient()


async function main() {
    await prisma.process.deleteMany({});
    await prisma.risk.deleteMany({});
    await prisma.control.deleteMany({});
    await prisma.$transaction(
        processes.map((process) => {
            return prisma.process.create({
                data: {
                    name: process.name,
                    description: process.description,
                    id: process.id,
                },
            })
        })
    );
    // await prisma.process.createMany({
    //     data: processes,
    // })
    // console.log("Processes loaded");
    // await prisma.risk.createMany({
    //     data: risks,
    // })
    // console.log("Risks loaded");
    // await prisma.control.createMany({
    //     data: controls,
    // })
    // console.log("Controls loaded");
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