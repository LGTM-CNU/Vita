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

  @Column({ nullable: true })
  morning: string | undefined | null;

  @Column({ nullable: true })
  evening: string | undefined | null;

  @Column({ nullable: true })
  afternoon: string | undefined | null;

  @Column()
  description: string;

  @Column()
  type: string;

  @Column()
  thumbnail: string;
}
