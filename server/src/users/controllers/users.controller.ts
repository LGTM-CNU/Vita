import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/CreateUser.dto';
import { UsersService } from '../services/users.service';

@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getUsers() {
    return 'hi';
  }

  // @Get(':id')
  // getUser(@Param('id', ParseIntPipe) id: string) {
  //   return this.userService.findUserById(id);
  // }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: string) {
    return this.userService.findUserById(id);
  }

  @Post('create')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
}
