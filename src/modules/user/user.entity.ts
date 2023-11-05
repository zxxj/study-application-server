import { Entity, Column, Unique, PrimaryGeneratedColumn } from 'typeorm';

@Entity('admin_user') // 数据库对应的表名称

// 新建User实体类
export class User {
  @PrimaryGeneratedColumn() // 代表自增列
  id: number;

  @Unique(['username']) // 代表唯一的列
  @Column() // 普通列
  username: string;

  @Column() // 普通列
  password: string;

  @Column() // 普通列
  nickname: string;

  @Column() // 普通列
  avatar: string;

  @Column() // 普通列
  role: string;

  @Column() // 普通列
  active: number;
}
