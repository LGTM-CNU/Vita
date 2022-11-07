import { UsersEntity } from '../users/users.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';

@Entity('medicines')
export class MedicinesEntity {
  @PrimaryColumn({ type: String })
  id: string;

  @OneToOne(() => UsersEntity)
  @JoinColumn({ name: 'userId' })
  userId: UsersEntity;

  @Column()
  name: string;
}
