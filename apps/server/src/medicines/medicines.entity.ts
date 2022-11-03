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

  @ManyToOne(() => UsersEntity, (Users) => Users.id)
  @JoinColumn()
  ownerId: UsersEntity;

  @Column()
  moring: string;

  @Column()
  evening: string;

  @Column()
  afternoon: string;

  @Column()
  description: string;

  @Column()
  type: string;
}
