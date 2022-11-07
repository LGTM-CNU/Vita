import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChattingRoomsController } from './chatting_rooms.controller';
import { ChattingRoomsEntity } from './chatting_rooms.entity';
import { ChattingRoomsService } from './chatting_rooms.service';

@Module({
  imports: [TypeOrmModule.forFeature([ChattingRoomsEntity])],
  controllers: [ChattingRoomsController],
  providers: [ChattingRoomsService],
})
export class ChattingRoomsModule {}
