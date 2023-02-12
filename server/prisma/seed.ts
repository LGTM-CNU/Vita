// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function main() {
//   const user = await prisma.user.upsert({
//     create: {
//       id: 1,
//       password: 'temp',
//     },
//     where: {
//       id: 1,
//     },
//     update: {},
//   });

//   console.log(user);
// }

// main().catch((e) => {
//   console.error(e);
//   process.exit(1);
// });

// // Reference
// // https://www.prisma.io/blog/nestjs-prisma-rest-api-7D056s1BmOL0
// // npx prisma db seed
