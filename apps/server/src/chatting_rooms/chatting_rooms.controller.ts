import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  HttpStatus,
} from '@nestjs/common';
import { ChattingRoomsService } from './chatting_rooms.service';

@Controller('chatting-rooms')
export class ChattingRoomsController {
  constructor(private ChattingRoomsService: ChattingRoomsService) {}

  @Get(':id')
  async getMedicines(@Param('id') id: string) {
    const data = await this.ChattingRoomsService.findByManager(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'User fetched successfully',
      data,
    };
  }
}
