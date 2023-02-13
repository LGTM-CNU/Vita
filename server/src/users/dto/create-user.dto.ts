import { IsNotEmpty, isEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    type: String,
    enum: Role,
    description: '기본값은 USER이고 ADMIN을 보내면 ADMIN으로 설정됩니다.',
  })
  mode: Role;
}
