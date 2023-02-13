import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(id: string, password: string) {
    const user = await this.usersService.findUserById(id);

    if (user && user.password === password) {
      return user;
    }

    return null;
  }
}
