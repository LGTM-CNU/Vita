import { PartialType } from '@nestjs/swagger';
import { CreatePushMessageDto } from './create-push-message.dto';

export class UpdatePushMessageDto extends PartialType(CreatePushMessageDto) {}
