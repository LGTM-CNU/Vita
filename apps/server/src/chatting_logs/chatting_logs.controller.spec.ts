import { Test, TestingModule } from '@nestjs/testing';
import { ChattingLogsController } from './chatting_logs.controller';

describe('ChattingLogsController', () => {
  let controller: ChattingLogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChattingLogsController],
    }).compile();

    controller = module.get<ChattingLogsController>(ChattingLogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
