import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { AuthDto } from './auth.dto';

export const UserId = createParamDecorator(
  (data: any, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const userId = request.user?.id;
    return userId;
  }
);

export const AuthParam = createParamDecorator(
  (data: any, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user ?? {};
    return {
      appName: request.appName,
      deviceId: request.deviceId,
      scope: request.scope,
      userId: user.id,
      userRole: user.roles,
    } as AuthDto;
  }
);

export const UserDetail = createParamDecorator(
  (data: any, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  }
);
