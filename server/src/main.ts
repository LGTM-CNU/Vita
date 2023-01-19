import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { PrismaService } from './prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Vita API')
    .setDescription('The Vita API description')
    .setVersion('1.0')
    //.addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

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
