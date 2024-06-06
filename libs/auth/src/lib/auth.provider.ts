import { Inject, Provider, Type } from '@nestjs/common';
import { AuthUserService } from './auth-user.service';

export function getAuthUserServiceToken() {
  return 'AuthUserService';
}
export function provideAuthUserService(
  useClass: Type<AuthUserService>
): Provider {
  return {
    provide: getAuthUserServiceToken(),
    useClass,
  };
}
export function InjectAuthUserService() {
  return Inject(getAuthUserServiceToken());
}
