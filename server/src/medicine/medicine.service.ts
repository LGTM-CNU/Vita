import { Injectable } from '@nestjs/common';

import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MedicineService {
  constructor(private prismaService: PrismaService) {}

  async create(createMedicineDto: CreateMedicineDto) {
    const { name, type, description, thumbnail, userId } = createMedicineDto;

    return await this.prismaService.medicine.create({
      data: {
        name,
        type,
        description,
        thumbnail,
        userId,
      },
    });
  }

  async findAll() {
    return await this.prismaService.medicine.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.medicine.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateMedicineDto: UpdateMedicineDto) {
    return await this.prismaService.medicine.update({
      where: {
        id,
      },
      data: {
        ...updateMedicineDto,
      },
    });
  }

  async remove(id: number) {
    return await this.prismaService.medicine.delete({
      where: {
        id,
      },
    });
  }
}
