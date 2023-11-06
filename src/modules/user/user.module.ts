import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // 建立数据库与Entity的映射关系
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
