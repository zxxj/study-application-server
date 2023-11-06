import { SetMetadata } from '@nestjs/common';

// 定义公共接口
export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
