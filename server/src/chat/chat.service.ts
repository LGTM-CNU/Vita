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

  async findOne(id: string) {
    try {
      const user = await this.prismaService.user.findUnique({
        where: {
          id,
        },
      });

      if (!user) {
        return null;
      }

      const chatList = await this.prismaService.chat.findMany({
        where: {
          userId: user.id,
        },
      });

      return chatList;

      // const result = await this.prismaService.chat.findUnique({
      //   where: {
      //     id: Number(id),
      //   },
      // });
      // if (!result) {
      //   return null;
      // }
      // return result;
    } catch (error) {}
  }

  // update(id: number, updateChatDto: UpdateChatDto) {
  //   return `This action updates a #${id} chat`;
  // }

  async update(id: number) {
    const chat = await this.prismaService.chat.update({
      where: {
        id,
      },
      data: {
        alarmed: true,
      },
    });

    return chat;
  }

  remove(id: number) {
    return `This action removes a #${id} chat`;
  }
}
