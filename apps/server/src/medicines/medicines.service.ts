import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersEntity } from 'src/users/users.entity';

import { MedicinesEntity } from './medicines.entity';
import { MedicinesDTO } from './medicine.dto';

@Injectable()
export class MedicinesService {
  constructor(
    @InjectRepository(MedicinesEntity)
    private medicinesRepository: Repository<MedicinesEntity>,
  ) {}

  async showMedicines(ownerId: UsersEntity) {
    return await this.medicinesRepository.findOne({ where: { ownerId } });
  }

  async create(data: MedicinesDTO) {
    const user = this.medicinesRepository.create(data);
    await this.medicinesRepository.save(data);
    return user;
  }

  async update(id: string, data: Partial<MedicinesDTO>) {
    return await this.medicinesRepository.update({ id }, data);
  }
}
