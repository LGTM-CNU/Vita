import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  HttpStatus,
} from '@nestjs/common';

import { MedicinesService } from './medicines.service';
import { MedicinesDTO } from './medicine.dto';

@Controller('medicines')
export class MedicinesController {
  constructor(private medicinesService: MedicinesService) {}

  @Post()
  async createMedicine(@Body() data: MedicinesDTO) {
    const user = await this.medicinesService.create(data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User created successfully',
      user,
    };
  }

  @Get(':id')
  async getMedicines(@Param('id') id: string) {
    const data = await this.medicinesService.showMedicines(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'User fetched successfully',
      data,
    };
  }

  @Patch(':id')
  async updateMedicine(
    @Param('id') id: string,
    @Body() data: Partial<MedicinesDTO>,
  ) {
    await this.medicinesService.update(id, data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User updated successfully',
    };
  }
}
