import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreatePushMessageDto } from './dto/create-push-message.dto';
import { UpdatePushMessageDto } from './dto/update-push-message.dto';

@Injectable()
export class PushMessageService {
  constructor(private readonly prismaService: PrismaService) {}

  storeFCM() {
    return this.prismaService;
  }

  create(createPushMessageDto: CreatePushMessageDto) {
    return 'This action adds a new pushMessage';
  }

  findAll() {
    return `This action returns all pushMessage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pushMessage`;
  }

  update(id: number, updatePushMessageDto: UpdatePushMessageDto) {
    return `This action updates a #${id} pushMessage`;
  }

  remove(id: number) {
    return `This action removes a #${id} pushMessage`;
  }
}
