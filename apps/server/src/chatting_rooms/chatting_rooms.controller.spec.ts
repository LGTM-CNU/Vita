import { Test, TestingModule } from '@nestjs/testing';
import { ChattingRoomsController } from './chatting_rooms.controller';

describe('ChattingRoomsController', () => {
  let controller: ChattingRoomsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChattingRoomsController],
    }).compile();

    controller = module.get<ChattingRoomsController>(ChattingRoomsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
