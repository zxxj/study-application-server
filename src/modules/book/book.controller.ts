import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('book')
export class BookController {
  @Get(':id')
  getBookById(@Param('id', ParseIntPipe) id: number): string {
    return 'book id:' + id;
  }
}
