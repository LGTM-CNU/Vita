import { Controller, Get, Post, Body, Param, HttpStatus } from '@nestjs/common';
import { ChattingRoomsEntity } from './chatting_rooms.entity';
import { ChattingRoomsService } from './chatting_rooms.service';

@Controller('chattingRooms')
export class ChattingRoomsController {
  constructor(private ChattingRoomsService: ChattingRoomsService) {}

  @Get(':id')
  async getChattingRoom(@Param('id') id: string) {
    const data = await this.ChattingRoomsService.findByManager(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'User fetched successfully',
      data,
    };
  }

  @Post()
  async createChattingRoom(@Body() data: ChattingRoomsEntity) {
    const newChattingRoom = await this.ChattingRoomsService.create(data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User created successfully',
      newChattingRoom,
    };
  }
}
