import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import admin from 'firebase-admin';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import * as serviceAccount from '../vita-firebase.json';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';

admin.initializeApp({
  credential: admin.credential.cert(
    serviceAccount as string | admin.ServiceAccount,
  ),
  databaseURL: 'https://vita-b53db-default-rtdb.firebaseio.com',
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger
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
