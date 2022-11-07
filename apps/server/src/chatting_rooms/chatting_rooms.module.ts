import { Module } from '@nestjs/common';
import { ChattingRoomsController } from './chatting_rooms.controller';
import { ChattingRoomsService } from './chatting_rooms.service';

@Module({
  controllers: [ChattingRoomsController],
  providers: [ChattingRoomsService],
})
export class ChattingRoomsModule {}
