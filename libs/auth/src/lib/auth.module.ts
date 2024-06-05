import { DynamicModule, Module, Type } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SSOService } from './ssto.service';
import { AuthUserService } from './auth-user.service';
import { provideAuthUserService } from './auth.provider';

@Module({
  imports: [
    ConfigModule.forFeature(() => ({})),
    JwtModule.registerAsync({
      inject: [ConfigService],
      extraProviders: [ConfigService],
      useFactory(service: ConfigService) {
        return {
          secret: service.getOrThrow('JWT_SECRET'),
          signOptions: {
            expiresIn: service.getOrThrow('JWT_EXPIRES_IN'),
          },
        };
      },
    }),
  ],

  providers: [SSOService],
})
export class AuthModule {
  static configure(userService: Type<AuthUserService>): DynamicModule {
    return {
      module: AuthModule,
      providers: [provideAuthUserService(userService)],
    };
  }
}
