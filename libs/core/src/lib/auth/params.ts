import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const UserId = createParamDecorator(
  (data: any, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const userId = request.user?.id;
    // Add your custom logic here to extract the parameter value
    console.table({ UserIdParam: userId });
    return userId; // Example: Assuming customValue is present in the request
  }
);
