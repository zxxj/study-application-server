import {
  Controller,
  Delete,
  Get,
  Body,
  Post,
  Put,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/data/:id')
  getTest(@Param() params): string {
    if (!params.subid) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: '没有传入id',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return 'data id:' + params.id;
  }

  // @Get('/data')
  // getAllData(): string {
  //   return 'getAllData';
  // }

  @Post('/data')
  add(@Body() body) {
    return 'add' + JSON.stringify(body);
  }

  @Put('/data/:id')
  updateData(@Param() params) {
    return 'updateData id:' + params.id;
  }

  @Delete('/data/:id')
  deleteData(@Param() params) {
    return 'deleteData id:' + params.id;
  }
}
