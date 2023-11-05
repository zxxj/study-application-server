import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // 连接数据库
import { getUsernameAndPassword } from './utils';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { BookModule } from './modules/book/book.module';

const { username, password } = getUsernameAndPassword();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username,
      password,
      database: 'vben-book-dev',
      autoLoadEntities: true,
    }),
    UserModule,
    AuthModule,
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
