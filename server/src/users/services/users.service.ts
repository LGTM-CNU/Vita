import { CreateUserDto } from './../dto/CreateUser.dto';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  private readonly users = [
    {
      id: '1',
      password: 'temp',
      name: 'hyunjin',
    },
  ];

  async findUserById(id: string) {
    return this.users.find((user) => user.id === id);
  }

  async createUser(createUserDto: CreateUserDto): Promise<User | null> {
    const { id, password } = createUserDto;

    const user = await this.prismaService.user.create({
      data: {
        id,
        password,
      },
    });

    return user;
  }
}
