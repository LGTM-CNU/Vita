import { PartialType } from '@nestjs/swagger';
import { CreateMedicineDto } from './create-medicine.dto';
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateMedicineDto extends PartialType(CreateMedicineDto) {
  @ApiProperty()
  name: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  thumbnail: string;

  @ApiProperty()
  @IsNotEmpty()
  userId: string;

  @ApiProperty()
  time: string[];

  @ApiProperty()
  repeat: string;
}
