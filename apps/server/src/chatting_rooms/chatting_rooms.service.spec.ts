import { Test, TestingModule } from '@nestjs/testing';
import { ChattingRoomsService } from './chatting_rooms.service';

describe('ChattingRoomsService', () => {
  let service: ChattingRoomsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChattingRoomsService],
    }).compile();

    service = module.get<ChattingRoomsService>(ChattingRoomsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
