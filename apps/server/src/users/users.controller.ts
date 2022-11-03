import { Controller, Post, Body, HttpStatus } from '@nestjs/common';

import { UsersService } from './users.service';
import { UsersDTO } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async createMedicine(@Body() data: UsersDTO) {
    const user = await this.usersService.create(data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User created successfully',
      user,
    };
  }
}
