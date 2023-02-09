import { Module } from '@nestjs/common';

import { PrismaService } from './../prisma/prisma.service';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [AuthController],
  providers: [
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService,
    },
    PrismaService,
  ],
})
export class AuthModule {}
