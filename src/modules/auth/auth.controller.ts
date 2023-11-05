import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get(':id')
  getAuthById(@Param('id', ParseIntPipe) id: number): string {
    return 'auth id:' + id;
  }
}
