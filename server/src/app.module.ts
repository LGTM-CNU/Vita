import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { TodoController } from './todo/controller/todo.controller';
import { TodoService } from './todo/service/todo.service';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthController } from './auth/controllers/auth.controller';
import { AuthService } from './auth/services/auth.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [TodoModule, AuthModule, UsersModule, PrismaModule],
  controllers: [TodoController, AuthController],
  providers: [TodoService, PrismaService, AuthService],
})
export class AppModule {}
