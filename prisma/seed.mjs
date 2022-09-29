import { processes, risks, controls } from "./data.js";
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()


async function main() {
    await prisma.process.deleteMany({});
    await prisma.risk.deleteMany({});
    await prisma.control.deleteMany({});
    await prisma.process.createMany({
        data: processes,
        skipDuplicates: true,
    });
    await prisma.risk.createMany({
        data: risks,
        skipDuplicates: true,
    });
    await prisma.control.createMany({
        data: controls,
        skipDuplicates: true,
    });
    await prisma.user.create({
        data: {
            email: "admin@pianat.ai",
            password: "admin",
            name: "Admin",
        }
    });
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