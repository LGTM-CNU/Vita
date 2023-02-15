import { Module } from '@nestjs/common';

import { UsersService } from 'src/users/users.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthController } from './auth/controllers/auth.controller';
import { AuthService } from './auth/services/auth.service';
import { PrismaService } from './prisma/prisma.service';
import { UsersController } from './users/users.controller';
import { MedicineModule } from './medicine/medicine.module';
import { ChatModule } from './chat/chat.module';
import { PushMessageModule } from './push-message/push-message.module';
import { ChatService } from './chat/chat.service';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    PrismaModule,
    MedicineModule,
    ChatModule,
    PushMessageModule,
  ],
  controllers: [AuthController, UsersController],
  providers: [PrismaService, AuthService, UsersService, ChatService],
})
export class AppModule {}
