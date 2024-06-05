import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { AuthDto } from './auth.dto';

export const UserId = createParamDecorator(
  (data: any, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const userId = request.user?.id;
    // Add your custom logic here to extract the parameter value
    console.table({ UserIdParam: userId });
    return userId; // Example: Assuming customValue is present in the request
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
