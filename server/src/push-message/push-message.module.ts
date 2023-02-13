import { Module } from '@nestjs/common';
import { PushMessageService } from './push-message.service';
import { PushMessageController } from './push-message.controller';

@Module({
  controllers: [PushMessageController],
  providers: [PushMessageService]
})
export class PushMessageModule {}
