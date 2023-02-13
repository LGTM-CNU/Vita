import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMedicineDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  thumbnail: string;

  @ApiProperty()
  userId: string;
}

// export class CreateUserDto {
//   @ApiProperty()
//   @IsNotEmpty()
//   id: string;

//   @ApiProperty()
//   @IsNotEmpty()
//   password: string;
// }

// id          Int     @id @default(autoincrement())
// name        String
// type        String?
// description String?
// thumbnail   String?

// user   User    @relation(fields: [userId], references: [id])
// userId String
// alarms Alarm[]

// createdAt DateTime @default(now())
// updatedAt DateTime @updatedAt
