import { CreateUserDto } from './dto/create-user.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
    const result = await this.prismaService.user.findUnique({
      where: {
        id,
      },
    });

    if (!result) {
      throw new HttpException(
        'id가 존재하지 않습니다. id를 확인해주세요.',
        HttpStatus.NOT_FOUND,
      );
    }

    return result;
  }

  async createUser(createUserDto: CreateUserDto): Promise<User | null> {
    const { id, password, mode } = createUserDto;
    try {
      const user = await this.prismaService.user.create({
        data: {
          id,
          password,
          mode: mode ?? Role.USER,
        },
      });

      if (!user) {
        throw new HttpException(
          'id가 중복되었기 때문에 유저 생성에 실패했습니다. id를 변경해주세요.',
          HttpStatus.NOT_FOUND,
        );
      }

      return user;
    } catch (error) {
      throw new HttpException(
        'Failed to retrieve user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getAllUsers() {
    return this.prismaService.user.findMany();
  }
}
