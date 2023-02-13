import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateChatDto {
  @ApiProperty()
  @IsNotEmpty()
  medicineId: string;

  @ApiProperty()
  // @IsNotEmpty()
  talker: string;

  @ApiProperty()
  alarmed: boolean;
}

// export class CreateUserDto {
//   @ApiProperty()
//   @IsNotEmpty()
//   id: string;

//   @ApiProperty()
//   @IsNotEmpty()
//   password: string;
// }
