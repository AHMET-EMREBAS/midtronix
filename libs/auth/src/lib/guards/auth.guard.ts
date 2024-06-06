import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { Reflector } from '@nestjs/core';
import { PermissionMeta, PublicMetadata } from '@mdtx/core';
import { Request } from 'express';
import { AuthUserService } from '../auth-user.service';
import { InjectAuthUserService } from '../auth.provider';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    protected readonly authService: AuthService,
    protected readonly reflector: Reflector,
    @InjectAuthUserService() protected readonly userService: AuthUserService
  ) {}

  async canActivate(ctx: ExecutionContext) {
    const request = ctx.switchToHttp().getRequest<Request>();
    const isPublic = PublicMetadata.get(ctx, this.reflector);

    if (isPublic) return true;

    const token =
      request.cookies?.authorization ?? request.headers?.authorization;


      
    if (token) {
      const payload = await this.authService.verify(token);

      if (payload) {
        const user = await this.userService.findOneById(payload.id);
        const requiredPermission = PermissionMeta.get(ctx, this.reflector);

        if (requiredPermission) {
          for (const role of user.roles) {
            for (const permission of role.permissions) {
              if (requiredPermission === permission) {
                return true;
              }
            }
          }
          return false;
        } else {
          return true;
        }
      }
    }

    return false;
  }
}
