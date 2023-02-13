import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { Role, User } from '@prisma/client';
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
    const { id, password, mode } = createUserDto;

    const user = await this.prismaService.user.create({
      data: {
        id,
        password,
        mode: mode ?? Role.USER,
      },
    });

    return user;
  }

  async getAllUsers() {
    return this.prismaService.user.findMany();
  }
}
