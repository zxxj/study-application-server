import { Body, Controller, Post } from '@nestjs/common';
import { Public } from './public.decorator';
import { AuthService } from './auth.service';
import { success, error } from 'src/utils';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @Public()
  async login(@Body() params) {
    return await this.authService
      .login(params.username, params.password)
      .then((res) => success('登陆成功', res))
      .catch((err) => error(err.message));
  }
}
