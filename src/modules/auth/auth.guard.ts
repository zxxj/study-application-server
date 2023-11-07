import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from './public.decorator';
// import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { JWT } from '../../enum';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly jwtService: JwtService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    // 1.从context上下文中拿到当前这个请求的的请求对象
    const request = context.switchToHttp().getRequest();

    // 2.获取token
    const token = extractTokenFormHeader(request.headers);

    // 3.如果token不存在则抛出异常
    if (!token) {
      throw new UnauthorizedException();
    } else {
      // 4.如果token存在则调用JWT验证token是否存在,调用verifyAsync并传入token值与定义的格式
      const payload = await this.jwtService.verifyAsync(token, {
        secret: JWT.JWT_SECRET_KEY,
      });

      // 5.校验成功,将返回的数据添加到请求对象中
      request['user'] = payload;
    }
    return true;
  }
}

// requestObjHeader: 当前请求对象的请求头
const extractTokenFormHeader = (requestObjHeader) => {
  // 判断当前请求头中是否存在token,如果存在则做分割,将类型保存到type,token保存到token字段,如不存在则返回一个空数组
  const [type, token] = requestObjHeader.authorization?.split(' ') ?? [];

  // 判断请求头中的token类型是否是Bearer,是则返回token, 否则返回空字符串
  return type === 'Bearer' ? token : '';
};
