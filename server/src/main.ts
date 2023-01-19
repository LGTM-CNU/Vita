import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use();
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

  await app.listen(3000);
}
bootstrap();
