import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PushMessageService } from './push-message.service';
import { CreatePushMessageDto } from './dto/create-push-message.dto';
import { UpdatePushMessageDto } from './dto/update-push-message.dto';

@Controller('push-message')
export class PushMessageController {
  constructor(private readonly pushMessageService: PushMessageService) {}

  @Get('/fcm/:id')
  fcm() {
    return this.pushMessageService.update();
  }

  @Post()
  create(@Body() createPushMessageDto: CreatePushMessageDto) {
    return this.pushMessageService.create(createPushMessageDto);
  }

  @Get()
  findAll() {
    return this.pushMessageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pushMessageService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePushMessageDto: UpdatePushMessageDto,
  ) {
    return this.pushMessageService.update(+id, updatePushMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pushMessageService.remove(+id);
  }
}
