import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Menu } from './menu.entity';
import { Repository } from 'typeorm';

@Injectable() // 加上Injectable才能在controller中直接使用它
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private readonly menuRespository: Repository<Menu>,
  ) {} // private readonly userRepository: Repository<Menu>, // 针对User这张表的数据库实例 // @InjectRepository(Menu)

  findAllMenu() {
    const sql = 'select * from menu where active = 1 order by id asc';
    return this.menuRespository.query(sql);
  }
}
