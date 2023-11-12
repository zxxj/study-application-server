import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Menu } from './menu.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private readonly menuRespository: Repository<Menu>,
  ) {}

  findAllMenu() {
    const sql = 'select * from menu order by id asc';
    return this.menuRespository.query(sql);
  }

  findActiveMenu() {
    const sql = 'select * from menu where active = 1 order by id asc';
    return this.menuRespository.query(sql);
  }
}
