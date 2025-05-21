import { PrismaClient } from "../src/generated/prisma/index.js"; // Adjust the import path based on your project structure

const prisma = new PrismaClient();


async function seed() {
  try {
    /* -------------------------------------------------------------------------- */
    /*                                 Delete Many                                */
    /* -------------------------------------------------------------------------- */
    await prisma.user.deleteMany();
    await prisma.event.deleteMany();
    await prisma.category.deleteMany();
    /* -------------------------------------------------------------------------- */
    /*                               Create One User                              */
    /* -------------------------------------------------------------------------- */
    const user = await prisma.user.create({
      data: {
        firstName: "John",
        lastName: "Doe",
        email: "Jhon@gmail.com", 
        username: "johndoe", 
        password: "jhondoe",
        phoneNumber: "08123456789",
        role: "ADMIN",
      }    
      })
      console.log('✅ User created:', user);
      /* -------------------------------------------------------------------------- */
      /*                                Create Event                                */
      /* -------------------------------------------------------------------------- */

      

      /* -------------------------------------------------------------------------- */
      /*                              Create Categories                             */
      /* -------------------------------------------------------------------------- */

      const category1 = await prisma.category.create({
        data: {
          name: "THEATER",
        },
      });
      console.log('✅ category created:', category1);

  } catch (error) {
    console.error('❌ Terjadi kesalahan saat seeding:', error);
  } 
}

seed()