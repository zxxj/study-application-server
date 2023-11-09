import { Module } from '@nestjs/common';
import { MenuController } from './menu.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menu } from './menu.entity';
import { MenuService } from './menu.service';

@Module({
  imports: [TypeOrmModule.forFeature([Menu])], // 建立数据库与Entity的映射关系
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule {}
