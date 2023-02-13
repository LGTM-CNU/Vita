import { Module } from '@nestjs/common';

import { UsersService } from 'src/users/services/users.service';
import { TodoService } from './todo/service/todo.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthController } from './auth/controllers/auth.controller';
import { AuthService } from './auth/services/auth.service';
import { PrismaService } from './prisma/prisma.service';
import { UsersController } from './users/controllers/users.controller';
import { MedicineModule } from './medicine/medicine.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [AuthModule, UsersModule, PrismaModule, MedicineModule, ChatModule],
  controllers: [AuthController, UsersController],
  providers: [TodoService, PrismaService, AuthService, UsersService],
})
export class AppModule {}
