import { DynamicModule, Module, Type } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SSOService } from './ssto.service';
import { AuthUserService } from './auth-user.service';
import {
  getAuthUserServiceToken,
  provideAuthUserService,
} from './auth.provider';
import { isDevMode } from '@mdtx/core';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards';

@Module({
  imports: [
    ConfigModule.forFeature(() => ({})),
    JwtModule.registerAsync({
      inject: [ConfigService],
      extraProviders: [ConfigService],
      useFactory(service: ConfigService) {
        const secret = service.getOrThrow('JWT_SECRET');
        const expiresIn = service.getOrThrow('JWT_EXPIRES_IN');

        if (isDevMode(true, false)) {
          console.table({ secret, expiresIn });
        }
        return { secret, signOptions: { expiresIn } };
      },
    }),
  ],

  controllers: [AuthController],
  providers: [SSOService, AuthService, AuthGuard],
  exports: [AuthService],
})
export class AuthModule {
  static configure(userService: Type<AuthUserService>): DynamicModule {
    return {
      module: AuthModule,
      providers: [provideAuthUserService(userService)],
      exports: [AuthModule, getAuthUserServiceToken()],
    };
  }
}
