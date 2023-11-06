import { Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Public } from './public.decorator';

@Controller('auth')
export class AuthController {
  @Post()
  @Public()
  login(): string {
    return 'auth';
  }
}
