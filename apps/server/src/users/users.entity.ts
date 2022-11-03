import { Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('users')
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: string;
}
