import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Menu } from './menu.entity';
import { Repository } from 'typeorm';
import { MENU_LIST } from './menu.data';

@Injectable() // 加上Injectable才能在controller中直接使用它
export class MenuService {
  constructor() {} // private readonly userRepository: Repository<Menu>, // 针对User这张表的数据库实例 // @InjectRepository(Menu)

  findAll() {
    return new Promise((resolve) => {
      resolve(MENU_LIST);
    });
  }
}
