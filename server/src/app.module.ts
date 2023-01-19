import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { TodoController } from './todo/controller/todo.controller';
import { TodoService } from './todo/service/todo.service';
import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [TodoModule, AuthModule, UsersModule, PrismaModule],
  controllers: [TodoController],
  providers: [TodoService, PrismaService],
})
export class AppModule {}
