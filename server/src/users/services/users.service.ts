import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      password: 'temp',
      name: 'hyunjin',
    },
  ];

  findUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  async findOne(id) {
    return;
  }
}
