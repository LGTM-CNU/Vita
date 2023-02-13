import { PrismaService } from './../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { MedicineService } from './medicine.service';
import { MedicineController } from './medicine.controller';

@Module({
  controllers: [MedicineController],
  providers: [MedicineService, PrismaService],
})
export class MedicineModule {}
