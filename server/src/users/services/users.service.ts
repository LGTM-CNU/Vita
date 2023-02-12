import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: '1',
      password: 'temp',
      name: 'hyunjin',
    },
  ];

  async findUserById(id: string) {
    return this.users.find((user) => user.id === id);
  }

  async createUser() {
    // const createdUser = await this;
  }
}
