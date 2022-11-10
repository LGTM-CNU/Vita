import { ChattingRoomsEntity } from 'src/chatting_rooms/chatting_rooms.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('chatting_logs')
export class ChattingLogsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ChattingRoomsEntity, (ChattingRoom) => ChattingRoom.id)
  @JoinColumn({ name: 'chattingId' })
  chattingId: string;

  @Column()
  content: string;

  @Column()
  talker: string;

  @CreateDateColumn()
  createAt: Date;
}
