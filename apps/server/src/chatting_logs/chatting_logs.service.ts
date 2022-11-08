import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChattingLogsEntity } from './chatting_logs.entity';

@Injectable()
export class ChattingLogsService {
  constructor(
    @InjectRepository(ChattingLogsEntity)
    private chattingLogsRepository: Repository<ChattingLogsEntity>,
  ) {}

  async create(data: ChattingLogsEntity) {
    const chattingLog = this.chattingLogsRepository.create(data);
    await this.chattingLogsRepository.save(data);
    return chattingLog;
  }

  async getChattingLogs(chattingId: string) {
    return await this.chattingLogsRepository
      .createQueryBuilder('chatting-logs')
      .where({ chattingId })
      .orderBy('createdAt')
      .getMany();
  }
}
