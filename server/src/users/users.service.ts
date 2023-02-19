import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Role, User } from '@prisma/client';

import { CreateRelationDto } from './dto/create-relation.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

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

  async findUserMedicines(userId: string) {
    const relation = await this.prismaService.relation.findUnique({
      where: {
        userId,
      },
    });

    const adminId = relation?.adminId;

    const userMedicines = await this.prismaService.medicine.findMany({
      where: {
        userId,
      },
    });

    const adminMedicines = await this.prismaService.medicine.findMany({
      where: {
        userId: adminId,
      },
    });

    const idSet = new Set();
    const userdIdSet = new Set();

    userMedicines.forEach((medicine) => idSet.add(medicine.id));
    adminMedicines.forEach((medicine) => idSet.add(medicine.id));

    const medicines = userMedicines
      .concat(adminMedicines)
      .filter((medicine) => {
        if (!userdIdSet.has(medicine.id) && idSet.has(medicine.id)) {
          userdIdSet.add(medicine.id);
          return true;
        } else {
          return false;
        }
      })
      .sort((a, b) => {
        return a.createdAt.getTime() - b.createdAt.getTime();
      });

    if (!medicines) {
      throw new HttpException('약을 찾을 수 없습니다.', HttpStatus.NOT_FOUND);
    }

    return medicines;
  }

  async createRelation(createRelationDto: CreateRelationDto) {
    // return this.prismaService.user.update({
    //   where: {
    //     id,
    //   },
    //   data: {
    // });
    const { userId, adminId } = createRelationDto;

    try {
      const relation = await this.prismaService.relation.create({
        data: {
          adminId,
          userId,
        },
      });

      if (!relation) {
        throw new HttpException(
          '관계를 생성할 수 없습니다.',
          HttpStatus.NOT_FOUND,
        );
      }

      return relation;
    } catch (error) {
      throw new HttpException(
        'Failed to retrieve user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getAllRelations() {
    return await this.prismaService.relation.findMany();
  }
}
