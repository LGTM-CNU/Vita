import { Test, TestingModule } from '@nestjs/testing';
import { PushMessageService } from './push-message.service';

describe('PushMessageService', () => {
  let service: PushMessageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PushMessageService],
    }).compile();

    service = module.get<PushMessageService>(PushMessageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
