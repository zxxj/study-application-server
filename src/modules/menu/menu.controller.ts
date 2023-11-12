import { Controller, Get } from '@nestjs/common';
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
}
