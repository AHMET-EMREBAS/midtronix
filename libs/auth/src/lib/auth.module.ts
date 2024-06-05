import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SSOService } from './ssto.service';

@Module({
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
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
export class AuthModule {}
