import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
} from '@nestjs/common';
import { AuthService } from '../auth.service';
import { Reflector } from '@nestjs/core';
import { AdvanceLogger, PermissionMeta, PublicMetadata } from '@mdtx/core';
import { Request } from 'express';
import { AuthUserService } from '../auth-user.service';
import { InjectAuthUserService } from '../auth.provider';

@Injectable()
export class AuthGuard implements CanActivate {
  private logger!: AdvanceLogger;
  constructor(
    protected readonly authService: AuthService,
    protected readonly reflector: Reflector,
    @InjectAuthUserService() protected readonly userService: AuthUserService
  ) {
    this.logger = new AdvanceLogger('AuthGuard');
  }

  async canActivate(ctx: ExecutionContext) {
    const request = ctx.switchToHttp().getRequest<Request>();
    const isPublic = PublicMetadata.get(ctx, this.reflector);

    this.logger.debug(`Is Public Resource : ${isPublic}`);

    if (isPublic) return true;

    const token = this.extractAuthToken(request);

    this.logger.debug(`Token: ${token}`);

    if (token) {
      const payload = await this.authService.verify(token);

      this.logger.debug('Verified User', payload);

      if (payload) {
        const user = await this.userService.findOneById(payload.id);
        const requiredPermission = PermissionMeta.get(ctx, this.reflector);

        this.logger.debug('User Details', user);
        this.logger.debug('Required Permission', requiredPermission);

        if (requiredPermission) {
          for (const role of user.roles) {
            for (const permission of role.permissions) {
              if (requiredPermission === permission.name) {
                this.logger.debug('User got the permission', {
                  permission: permission,
                });
                return true;
              }
            }
          }
          this.logger.debug('User does not have permission!', {
            permission: 0,
          });
          return false;
        } else {
          return true;
        }
      }
    }

    return false;
  }

  extractAuthToken(request: Request) {
    return (
      request.cookies?.authorization ??
      request.headers?.authorization?.split(' ').pop()
    );
  }
}
