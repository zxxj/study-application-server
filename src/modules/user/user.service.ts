import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable() // 加上Injectable才能在controller中直接使用它
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>, // 针对User这张表的数据库实例
  ) {}

  findOne(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }
}
