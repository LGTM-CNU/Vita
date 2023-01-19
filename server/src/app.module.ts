import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { TodoController } from './todo/controller/todo.controller';
import { TodoService } from './todo/service/todo.service';
import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TodoModule, AuthModule],
  controllers: [TodoController],
  providers: [TodoService, PrismaService],
})
export class AppModule {}
