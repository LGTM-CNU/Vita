import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiParam } from '@nestjs/swagger';

@Controller('api/v1/user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  @ApiOperation({ summary: '유저 id로 유저 정보 가져오기' })
  getUserById(@Param('id') id: string) {
    return this.userService.findUserById(id);
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get(':id/medicines')
  getUserMedicines(@Param('id') id: string) {
    return this.userService.findUserMedicines(id);
  }
}
