import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity('users')
export class UsersEntity {
  @PrimaryColumn({ type: String })
  id: string;

  @Column()
  name: string;
}
