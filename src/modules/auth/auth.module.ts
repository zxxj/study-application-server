import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { JWT } from '../../enum';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: JWT.JWT_SECRET_KEY,
      signOptions: { expiresIn: 24 * 60 * 60 + 's' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AuthModule {}
