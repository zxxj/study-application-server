import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as md5 from 'md5';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(username: string, password: string) {
    const user = await this.userService.findUserByUsername(username);

    const md5Password = md5(password).toUpperCase();

    // 如果当前登录密码与数据库中的密码不一致则401抛出异常
    if (md5Password !== user.password) {
      throw new UnauthorizedException();
    }

    const payload = { username: user.username, userid: user.id };

    return {
      token: await this.jwtService.signAsync(payload),
    };
  }
}
