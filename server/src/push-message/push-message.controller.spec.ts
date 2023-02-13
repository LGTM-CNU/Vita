import { Test, TestingModule } from '@nestjs/testing';
import { PushMessageController } from './push-message.controller';
import { PushMessageService } from './push-message.service';

describe('PushMessageController', () => {
  let controller: PushMessageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PushMessageController],
      providers: [PushMessageService],
    }).compile();

    controller = module.get<PushMessageController>(PushMessageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
