import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
import { PrismaService } from 'src/prisma/prisma.service';

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

    return {
      ...medicine,
      time: result.map((r: any) => r.time),
    };
  }

  async findAll() {
    const medicines = await this.prismaService.medicine.findMany();

    const result = await Promise.all(
      medicines.map((medicine) => {
        return this.prismaService.time.findMany({
          where: {
            medicineId: medicine.id,
          },
        });
      }),
    );

    return medicines.map((medicine, index) => {
      return {
        ...medicine,
        time: result[index].map((r: any) => r.time),
      };
    });
  }

  async findOne(id: number) {
    const medicine = await this.prismaService.medicine.findUnique({
      where: {
        id,
      },
    });

    const time = await this.prismaService.time.findMany({
      where: {
        medicineId: id,
      },
    });

    return {
      ...medicine,
      time: time.map((t) => t.time),
    };
  }

  async update(id: number, updateMedicineDto: UpdateMedicineDto) {
    const { name, type, description, thumbnail, userId, time, repeat } =
      updateMedicineDto;

    const medicine = await this.prismaService.medicine.update({
      where: {
        id,
      },
      data: {
        name,
        type,
        description,
        thumbnail,
        userId,
        repeat,
      },
    });

    await this.prismaService.time.deleteMany({
      where: {
        medicineId: id,
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

    return {
      ...medicine,
      time: result.map((r: any) => r.time),
    };
  }

  async remove(id: number) {
    try {
      const result = await this.prismaService.medicine.delete({
        where: {
          id,
        },
      });

      return result;
    } catch (error) {
      throw new HttpException(
        'medicineId로 검색된 약이 없습니다. medicineId를 확인해주세요.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
