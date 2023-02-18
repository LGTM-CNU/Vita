import { Injectable } from '@nestjs/common';
import admin from 'firebase-admin';

import { UpdateFCMDto } from './dto/create-push-message.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PushMessageService {
  constructor(private readonly prismaService: PrismaService) {}

  async storeFCM(updateFCMDto: UpdateFCMDto) {
    return await this.prismaService.user.update({
      where: {
        id: updateFCMDto.userId,
      },
      data: {
        fcmToken: updateFCMDto.fcmToken,
      },
    });
  }

  async sendMessage(userId: string) {
    const relation = await this.prismaService.relation.findUnique({
      where: {
        userId,
      },
    });

    const adminId = relation.adminId;

    const ad = await this.prismaService.user.findUnique({
      where: {
        id: adminId,
      },
    });

    const fcmToken = ad.fcmToken;

    const message = {
      notification: {
        title: 'Vita Test',
        body: '환자가 약을 먹지 않았습니다.',
      },
      token: fcmToken,
    };

    try {
      await admin.messaging().send(message);
    } catch (error) {
      console.log(error);
    }

    // console.log(adminId);
  }

  // create(createPushMessageDto: CreatePushMessageDto) {
  //   return 'This action adds a new pushMessage';
  // }

  // findAll() {
  //   return `This action returns all pushMessage`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} pushMessage`;
  // }

  // update(id: number, updatePushMessageDto: UpdatePushMessageDto) {
  //   return `This action updates a #${id} pushMessage`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} pushMessage`;
  // }
}
