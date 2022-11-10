import { UsersEntity } from 'src/users/users.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('chatting_rooms')
export class ChattingRoomsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UsersEntity, (User) => User.id)
  @JoinColumn({ name: 'userId' })
  userId: UsersEntity;

  @Column()
  title: string;

  @CreateDateColumn()
  createAt: Date;
}
