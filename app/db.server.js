import { PrismaClient } from "@prisma/client";

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
}

export default prisma;

// import { PrismaClient } from '@prisma/client';
 
// const prisma = new PrismaClient();
 
// export default async function prismaExample() {
//   const newUser = await prisma.user.create({
//     data: {
//       name: 'Niket',
//       email: 'niket123kumar@gmail.com',
//     },
//   });
 
//   const users = await prisma.user.findMany();
// }