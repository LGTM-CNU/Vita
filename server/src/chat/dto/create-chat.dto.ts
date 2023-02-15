import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateChatDto {
  @ApiProperty()
  talker: string;

  @ApiProperty()
  destination: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  isVoice: string;

  @ApiProperty()
  @IsNotEmpty()
  medicineId: string;

  @ApiProperty()
  alarmed: boolean;

  @ApiProperty()
  userId: string;
}
