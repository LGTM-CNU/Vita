import { Strategy } from 'passport-local';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { AuthService } from '../services/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {
    super(); // config
  }

  async validate(id: number, password: string): Promise<any> {
    const user = await this.authService.validateUser(id, password);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
