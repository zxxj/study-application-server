import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get(':id')
  getAuthById(@Param('id', ParseIntPipe) id) {
    return 'auth id:' + id;
  }
}
