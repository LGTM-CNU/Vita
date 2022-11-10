import { Controller, Get, Post, Body, Param, HttpStatus } from '@nestjs/common';
import { ChattingLogsEntity } from './chatting_logs.entity';
import { ChattingLogsService } from './chatting_logs.service';

@Controller('chattingLogs')
export class ChattingLogsController {
  constructor(private chattingLogsService: ChattingLogsService) {}

  @Get(':chattingRoomId')
  async getChattingLogs(@Param('chattingRoomId') chattingRoomId: string) {
    const data = await this.chattingLogsService.getChattingLogs(chattingRoomId);
    return {
      statusCode: HttpStatus.OK,
      message: 'User fetched successfully',
      data,
    };
  }

  @Post()
  async createChattingLog(@Body() data: ChattingLogsEntity) {
    const newChattingLog = await this.chattingLogsService.create(data);
    return {
      statusCode: HttpStatus.OK,
      message: 'create chatting log',
      newChattingLog,
    };
  }
}
