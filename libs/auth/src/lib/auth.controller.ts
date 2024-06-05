import { ApiVersion, PublicResource, UserId, ValidationPipe } from '@mdtx/core';
import { Body, Controller, Post, applyDecorators } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { LoginDto } from './dto';

export function Login() {
  return applyDecorators(
    ApiOperation({ summary: 'login' }),
    ApiNotFoundResponse({ description: 'User not found!' }),
    ApiBadRequestResponse({ description: 'Password does not match!' }),
    PublicResource(),
    Post('login')
  );
}

export function Logout() {
  return applyDecorators(ApiOperation({ summary: 'Logout' }), Post('logout'));
}
@Controller(ApiVersion.v1)
export class AuthController {
  constructor(protected readonly service: AuthService) {}

  @Login()
  async login(@Body(ValidationPipe) loginDto: LoginDto) {
    return await this.service.login(loginDto);
  }

  @Logout()
  logout(@UserId() userId: number) {
    return;
  }
}
