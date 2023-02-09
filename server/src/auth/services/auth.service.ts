import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(id: number, password: string) {
    const user = await this.usersService.findUserById(id);

    if (user && user.password === password) {
      return user;
    }

    return null;
  }
}
