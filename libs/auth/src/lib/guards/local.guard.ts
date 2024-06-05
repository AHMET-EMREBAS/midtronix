import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthUserService } from '../auth-user.service';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalGuard implements CanActivate {
  constructor(protected readonly authService: AuthService) {}
  async canActivate(ctx: ExecutionContext) {
    const requeset = ctx.switchToHttp().getRequest();
    const body = requeset.body;
    const token = await this.authService.login(body);

    return true;
  }
}
