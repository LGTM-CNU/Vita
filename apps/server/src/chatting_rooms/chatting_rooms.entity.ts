import { UsersEntity } from 'src/users/users.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';

@Entity('chatting_rooms')
export class ChattingRoomsEntity {
  @PrimaryColumn({ type: String })
  id: string;

  @ManyToOne(() => UsersEntity, (User) => User.id)
  @JoinColumn({ name: 'userId' })
  userId: UsersEntity;

  @Column()
  title: string;

  @CreateDateColumn()
  createAt: Date;
}
