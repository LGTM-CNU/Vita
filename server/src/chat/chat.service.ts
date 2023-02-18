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

  async findOne(userId: string) {
    try {
      const relation = await this.prismaService.relation.findUnique({
        where: {
          userId,
        },
      });

      const adminId = relation?.adminId;
      // const user = await this.prismaService.user.findUnique({
      //   where: {
      //     id,
      //   },
      // });

      const userChat = await this.prismaService.chat.findMany({
        where: {
          userId,
        },
      });

      const adminChat = await this.prismaService.chat.findMany({
        where: {
          userId: adminId,
        },
      });

      const chatIdSet = new Set();
      const usedChatIdSet = new Set();

      userChat.forEach((chat) => chatIdSet.add(chat.id));
      adminChat.forEach((chat) => chatIdSet.add(chat.id));

      const chatList = userChat.concat(adminChat).filter((chat) => {
        if (chatIdSet.has(chat.id) && !usedChatIdSet.has(chat.id)) {
          usedChatIdSet.add(chat.id);
          return true;
        } else {
          return false;
        }
      });

      return chatList;

      // const adminId = relation?.adminId;

      // const userMedicines = await this.prismaService.medicine.findMany({
      //   where: {
      //     userId,
      //   },
      // });

      // const adminMedicines = await this.prismaService.medicine.findMany({
      //   where: {
      //     userId: adminId,
      //   },
      // });

      // const idSet = new Set();

      // userMedicines.forEach((medicine) => idSet.add(medicine.id));
      // adminMedicines.forEach((medicine) => idSet.add(medicine.id));

      // const medicines = userMedicines
      //   .concat(adminMedicines)
      //   .filter((medicine) => {
      //     if (idSet.has(medicine.id)) {
      //       return false;
      //     } else {
      //       idSet.add(medicine.id);
      //       return true;
      //     }
      //   });

      // if (!medicines) {
      //   throw new HttpException('약을 찾을 수 없습니다.', HttpStatus.NOT_FOUND);
      // }

      // return medicines;
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
