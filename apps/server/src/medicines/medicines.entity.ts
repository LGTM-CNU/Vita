import { UsersEntity } from '../users/users.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('medicines')
export class MedicinesEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne((type) => UsersEntity, (Users) => Users.id)
  @JoinColumn({ name: 'ownerId' })
  ownerId: UsersEntity;

  @Column()
  morning: string;

  @Column()
  evening: string;

  @Column()
  afternoon: string;

  @Column()
  description: string;

  @Column()
  type: string;
}
