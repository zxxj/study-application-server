import { Controller, Get } from '@nestjs/common';
import { MenuService } from './menu.service';
import { wrapperResponse } from 'src/utils';
import { MENU_LIST } from './menu.data';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get()
  getAllMenu(): string {
    return wrapperResponse('获取菜单成功', this.menuService.findAll());
  }
}
