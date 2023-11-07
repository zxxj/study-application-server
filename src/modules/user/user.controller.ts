import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  // @Get(':id')
  // getUserById(@Param('id', ParseIntPipe) id) {
  //   return this.userService.findOne(id);
  // }

  // @Get()
  // getAllUser() {
  //   return this.userService.findAll();
  // }

  @Post()
  create(@Body() body) {
    this.userService.createUser(body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id) {
    this.userService.deleteUserById(id);
  }

  @Get('info')
  getUserInfoByToken() {
    return 'user info';
  }
}
