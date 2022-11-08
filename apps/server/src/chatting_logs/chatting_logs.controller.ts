import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  HttpStatus,
} from '@nestjs/common';
import { ChattingLogsService } from './chatting_logs.service';

@Controller('chatting-logs')
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
}
