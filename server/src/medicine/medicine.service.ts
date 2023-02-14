import { Injectable } from '@nestjs/common';

import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Time } from '.prisma/client';

@Injectable()
export class MedicineService {
  constructor(private prismaService: PrismaService) {}

  async create(createMedicineDto: CreateMedicineDto) {
    const { name, type, description, thumbnail, userId, time, repeat } =
      createMedicineDto;

    const medicine = await this.prismaService.medicine.create({
      data: {
        name,
        type,
        description,
        thumbnail,
        userId,
        repeat,
      },
    });

    const result = await Promise.all(
      time.map((t) =>
        this.prismaService.time.create({
          data: {
            time: t,
            medicineId: medicine.id,
          },
        }),
      ),
    );
    // console.log(result); // time 확인

    return {
      ...medicine,
      time: result.map((r: any) => r.time),
    };
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
    return;
    //  await this.prismaService.medicine.update({
    //   where: {
    //     id,
    //   },
    //   data: {
    //     ...updateMedicineDto,
    //   },
    // });
  }

  async remove(id: number) {
    return await this.prismaService.medicine.delete({
      where: {
        id,
      },
    });
  }
}
