import { Test, TestingModule } from '@nestjs/testing';
import { ChattingLogsService } from './chatting_logs.service';

describe('ChattingLogsService', () => {
  let service: ChattingLogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChattingLogsService],
    }).compile();

    service = module.get<ChattingLogsService>(ChattingLogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
