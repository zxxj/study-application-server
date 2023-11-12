import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { MenuService } from './menu.service';
import { wrapperResponse } from 'src/utils';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get()
  getAllMenu(): string {
    return wrapperResponse('获取菜单成功', this.menuService.findAllMenu());
  }

  @Get('active')
  findActiveMenu(): string {
    return wrapperResponse('获取菜单成功', this.menuService.findActiveMenu());
  }

  @Post()
  createMenu(@Body() body) {
    return wrapperResponse('创建菜单成功', this.menuService.create(body));
  }

  @Put()
  updateMenu(@Body() body) {
    return wrapperResponse('更新菜单成功', this.menuService.update(body));
  }
}
