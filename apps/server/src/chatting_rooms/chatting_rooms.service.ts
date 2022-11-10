import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChattingRoomsEntity } from './chatting_rooms.entity';
@Injectable()
export class ChattingRoomsService {
  constructor(
    @InjectRepository(ChattingRoomsEntity)
    private chattingRoomsRepository: Repository<ChattingRoomsEntity>,
  ) {}

  async findByManager(managerId: string) {
    return await this.chattingRoomsRepository
      .createQueryBuilder('chatting_rooms')
      .innerJoinAndSelect(
        'managers',
        'managers',
        'chatting_rooms.userId=managers.userId',
      )
      .where('managers.userId=:managerId', { managerId })
      .getOne();
  }

  async findById(userId: string) {
    return await this.chattingRoomsRepository
      .createQueryBuilder('chatting_rooms')
      .where('userId=:userId', { userId })
      .getOne();
  }

  async create(data: ChattingRoomsEntity) {
    const chattingRoom = this.chattingRoomsRepository.create(data);
    await this.chattingRoomsRepository.save(data);
    return chattingRoom;
  }
}
