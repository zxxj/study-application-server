import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id): string {
    console.log(typeof id);
    return 'getuser:' + id;
  }
}
