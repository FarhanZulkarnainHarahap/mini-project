import { PrismaClient } from "../src/generated/prisma/index.js"; // Adjust the import path based on your project structure

const prisma = new PrismaClient();

async function seed() {
  try {
    /* -------------------------------------------------------------------------- */
    /*                                 Delete Many                                */
    /* -------------------------------------------------------------------------- */

    await prisma.eventImage.deleteMany();
    await prisma.ticket.deleteMany();
    await prisma.event.deleteMany();
    await prisma.user.deleteMany();
    await prisma.image.deleteMany();
    /* -------------------------------------------------------------------------- */
    /*                               Create One User                              */
    /* -------------------------------------------------------------------------- */

    /* -------------------------------------------------------------------------- */
    /*                                Create Event                                */
    /* -------------------------------------------------------------------------- */

    /* -------------------------------------------------------------------------- */
    /*                              Create Categories                             */
    /* -------------------------------------------------------------------------- */
  } catch (error) {
    console.error("❌ Terjadi kesalahan saat seeding:", error);
  }
}

seed();
