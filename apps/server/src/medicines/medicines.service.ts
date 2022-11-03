import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { MedicinesEntity } from './medicines.entity';
import { MedicinesDTO } from './medicine.dto';

@Injectable()
export class MedicinesService {
  constructor(
    @InjectRepository(MedicinesEntity)
    private medicinesRepository: Repository<MedicinesEntity>,
  ) {}

  async findByUser(ownerId: string) {
    console.log('in: ', ownerId);
    return await this.medicinesRepository.find({ relations: ['ownerId'] });
  }

  async create(data: MedicinesEntity) {
    const user = this.medicinesRepository.create(data);
    await this.medicinesRepository.save(data);
    return user;
  }

  async update(id: string, data: Partial<MedicinesEntity>) {
    return await this.medicinesRepository.update({ id }, data);
  }
}
