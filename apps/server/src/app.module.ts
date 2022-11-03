import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MedicinesModule } from './medicines/medicines.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'vita',
      password: 'LGTM',
      database: 'vita',
      synchronize: true,
      logging: true,
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    }),
    MedicinesModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
