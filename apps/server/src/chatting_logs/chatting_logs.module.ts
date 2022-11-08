import { Module } from '@nestjs/common';
import { ChattingLogsService } from './chatting_logs.service';
import { ChattingLogsController } from './chatting_logs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChattingLogsEntity } from './chatting_logs.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChattingLogsEntity])],
  providers: [ChattingLogsService],
  controllers: [ChattingLogsController],
})
export class ChattingLogsModule {}
