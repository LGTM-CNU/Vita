import { ChattingRoomsEntity } from 'src/chatting_rooms/chatting_rooms.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';

@Entity('chatting_logs')
export class ChattingLogsEntity {
  @PrimaryColumn({ type: String })
  id: string;

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
