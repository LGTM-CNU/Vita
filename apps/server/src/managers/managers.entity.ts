import { UsersEntity } from '../users/users.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';

@Entity('managers')
export class ManagersEntity {
  @PrimaryColumn({ type: String })
  id: string;

  @OneToOne(() => UsersEntity)
  @JoinColumn({ name: 'userId' })
  userId: string;

  @Column({ type: String })
  name: string;
}
