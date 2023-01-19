import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { TodoController } from './todo/controller/todo.controller';
import { TodoService } from './todo/service/todo.service';

@Module({
  imports: [TodoModule],
  controllers: [TodoController],
  providers: [TodoService],
})
export class AppModule {}
