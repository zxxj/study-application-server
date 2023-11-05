import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CreateUserDto } from './createUserDto';

@Injectable() // 加上Injectable才能在controller中直接使用它
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>, // 针对User这张表的数据库实例
  ) {}

  // 查找单个
  findOne(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  // 查找所有
  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  // 新增用户
  createUser(createUser: CreateUserDto): Promise<User> {
    const user = new User();

    user.username = createUser.username;
    user.password = createUser.password;
    user.avatar = createUser.avatar;
    user.role = createUser.role;
    user.nickname = createUser.nickname;
    user.active = 1;

    return this.userRepository.save(user);
  }

  // 删除单个
  deleteUserById(id: number): Promise<DeleteResult> {
    return this.userRepository.delete(id);
  }
}
