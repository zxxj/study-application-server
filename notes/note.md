## 1.Nestjs连接MySql

```js
1.安装插件: pnpm install @nestjs/typeorm typeorm mysql2
```

```js	
2.app.module.ts
import { Module } from '@nestjs/common';
+ import { TypeOrmModule } from '@nestjs/typeorm'; // 连接数据库
+ import { getUsernameAndPassword } from './utils'; // 读取用户名与密码
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { BookModule } from './modules/book/book.module';

+ const { username, password } = getUsernameAndPassword(); // 用户名与密码

@Module({
  imports: [
    + TypeOrmModule.forRoot({
      type: 'mysql', // 代表要连接的数据库为mysql
      host: '127.0.0.1', // 连接的域名
      port: 3306, // 端口号
      username, // 用户名
      password, // 密码
      database: 'vben-book-dev',
      autoLoadEntities: true, // 自动加载entity
    }),
    UserModule,
    AuthModule,
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

```js
3.运行pnpm run start:dev数据库连接成功
```

```js
4.通过Entity创建实体类 uset.entity.ts
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
```

```js
5.user.module.ts

import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // 建立数据库与Entity的映射关系
  controllers: [UserController],
  providers: [UserService], // 创建userService
})
export class UserModule {}

```

```js
6.user.service.ts

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
```



## 2.实现JWT鉴权流程

```js
1.请求接口 request api
2.解析http header中的JWT token 获取用户信息 => guard
3.处理业务逻辑 => controller
4.操作数据库 => servies
5.返回数据
```

```js
1.在auth.module.ts中注册请求守卫

import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
+ import { APP_GUARD } from '@nestjs/core';
+ import { AuthGuard } from './auth.guard';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      + provide: APP_GUARD, // 就是一个字符串
      + useClass: AuthGuard, // 请求守卫实例
    },
  ],
})
export class AuthModule {}
```

```js
2.创建auth.guard.ts

import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from './public.decorator';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate { // 守卫必须实现CanActivate这个接口
  
  // 公共接口相关
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
      
      // 对公共接口的一些处理
    const isPublic = this.reflector.getAllAndOverride(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
	
		// 如果是公共接口 直接放行
    if (isPublic) {
      return true;
    }

    return undefined;
  }
}

```

```js
3.定义公共接口,例如login,不需要进行JWT验证的接口
import { SetMetadata } from '@nestjs/common';

// 定义公共接口
export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
```

