import { Injectable } from '@nestjs/common';

import { UpdateFCMDto } from './dto/create-push-message.dto';
import { PrismaService } from 'src/prisma/prisma.service';
// import { UpdatePushMessageDto } from './dto/update-push-message.dto';

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
