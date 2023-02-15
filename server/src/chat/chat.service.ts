import { Injectable } from '@nestjs/common';

import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChatService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createChatDto: CreateChatDto) {
    const { userId, destination, talker, alarmed, isVoice, content } =
      createChatDto;
    return await this.prismaService.chat.create({
      data: {
        userId,
        destination,
        talker,
        alarmed,
        isVoice,
        content,
      },
    });
  }

  findAll() {
    return `This action returns all chat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chat`;
  }

  update(id: number, updateChatDto: UpdateChatDto) {
    return `This action updates a #${id} chat`;
  }

  remove(id: number) {
    return `This action removes a #${id} chat`;
  }
}
