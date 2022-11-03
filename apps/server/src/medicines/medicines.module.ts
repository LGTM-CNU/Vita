import { Module } from '@nestjs/common';
import { MedicinesService } from './medicines.service';
import { MedicinesController } from './medicines.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicinesEntity } from './medicines.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MedicinesEntity])],
  providers: [MedicinesService],
  controllers: [MedicinesController],
})
export class MedicinesModule {}
