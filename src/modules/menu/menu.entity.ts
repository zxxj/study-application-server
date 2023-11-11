import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('menu') // 数据库对应的表名称

// 新建User实体类
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Unique(['path'])
  path: string;

  @Column()
  @Unique(['string'])
  name: string;

  @Column()
  redirect: string;

  @Column()
  meta: string;

  @Column()
  pid: number;

  // 菜单是否可用? 1可用 0不可用
  @Column()
  active: number;
}
