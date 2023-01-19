import { Injectable } from '@nestjs/common';
import { Todo } from '@prisma/client';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private prismaService: PrismaService) {}

  async fetchAllTodos(): Promise<Todo[]> {
    return this.prismaService.todo.findMany();
  }

  async fetchTodoItem(id: number): Promise<Todo | null> {
    return this.prismaService.todo.findUnique({
      where: {
        id: Number(id),
      },
    });
  }

  async deleteTodoItem(id: number): Promise<Todo | null> {
    return this.prismaService.todo.delete({
      where: {
        id: Number(id),
      },
    });
  }

  async addTodoItem(data: Todo): Promise<Todo | null> {
    return this.prismaService.todo.create({ data });
  }
}
