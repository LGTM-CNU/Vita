import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';

import admin from 'firebase-admin';

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const serviceAccount = require('../vita-firebase.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: 'https://vita-b53db-default-rtdb.firebaseio.com',
// });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Vita API')
    .setDescription('Vita 서비스에 대한 API 명세서입니다.')
    .setVersion('1.0')
    .addTag('Vita')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/', app, document);

  // Prisma
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  app.use(
    session({
      secret: 'hyunjin',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 60000, // 1분
      },
    }),
  );

  await app.listen(4000);
}
bootstrap();
