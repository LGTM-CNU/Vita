import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;
}
