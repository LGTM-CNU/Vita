import { Module } from '@nestjs/common';
import { ManagersController } from './managers.controller';
import { ManagersService } from './managers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManagersEntity } from './managers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ManagersEntity])],
  controllers: [ManagersController],
  providers: [ManagersService],
})
export class ManagersModule {}
