import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

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
})
export class AuthModule {}
