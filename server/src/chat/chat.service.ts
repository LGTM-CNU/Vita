import { Injectable } from '@nestjs/common';

import { CreateChatDto } from './dto/create-chat.dto';
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

  async findAll() {
    try {
      const chatList = await this.prismaService.chat.findMany();
      return chatList;
    } catch (error) {
      console.log(error);
    }

    return 'error';
  }

  async findOne(userId: string) {
    try {
      const user = await this.prismaService.user.findUnique({
        where: {
          id: userId,
        },
      });

      const isAdmin = user.mode === 'ADMIN';

      if (isAdmin) {
        const relation = await this.prismaService.relation.findUnique({
          where: {
            adminId: userId,
          },
        });

        const patientId = relation?.userId;

        const patientChat = await this.prismaService.chat.findMany({
          where: {
            userId: patientId,
          },
        });

        const adminChat = await this.prismaService.chat.findMany({
          where: {
            userId,
          },
        });

        return patientChat.concat(adminChat).sort((a, b) => {
          return a.createdAt.getTime() - b.createdAt.getTime();
        });
      }

      const relation = await this.prismaService.relation.findUnique({
        where: {
          userId,
        },
      });

      const adminId = relation?.adminId;
      // const patientId = relation.

      const userChat = await this.prismaService.chat.findMany({
        where: {
          userId,
        },
      });

      const adminChat =
        adminId == null
          ? []
          : await this.prismaService.chat.findMany({
              where: {
                userId: adminId,
              },
            });

      const chatIdSet = new Set();
      const usedChatIdSet = new Set();

      userChat.forEach((chat) => chatIdSet.add(chat.id));
      adminChat.forEach((chat) => chatIdSet.add(chat.id));

      const chatList = userChat
        .concat(adminChat)
        .filter((chat) => {
          if (chatIdSet.has(chat.id) && !usedChatIdSet.has(chat.id)) {
            usedChatIdSet.add(chat.id);
            return true;
          } else {
            return false;
          }
        })
        .sort((a, b) => {
          return a.createdAt.getTime() - b.createdAt.getTime();
        });

      return chatList;
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
