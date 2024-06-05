import { Inject, Provider, Type } from '@nestjs/common';
import { AuthUserService } from './auth-user.service';

export function provideAuthUserService(
  useClass: Type<AuthUserService>
): Provider {
  return {
    provide: 'AuthUserService',
    useClass,
  };
}
export function InjectAuthUserService() {
  return Inject('AuthUserService');
}
