import { ApiVersion, PublicResource, UserId, ValidationPipe } from '@mdtx/core';
import { Body, Controller, Post, applyDecorators } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { LoginDto, SSOLoginDto } from './dto';

export function Login() {
  return applyDecorators(
    ApiOperation({ summary: 'login' }),
    ApiNotFoundResponse({ description: 'User not found!' }),
    ApiBadRequestResponse({ description: 'Password does not match!' }),
    PublicResource(),
    Post('login')
  );
}

export function SSOLogin() {
  return applyDecorators(
    ApiOperation({ summary: 'Login with sso' }),
    ApiNotFoundResponse({ description: 'User not found!' }),
    ApiBadRequestResponse({ description: 'SSO does not match!' }),
    PublicResource(),
    Post('sso-login')
  );
}

export function Logout() {
  return applyDecorators(ApiOperation({ summary: 'Logout' }), Post('logout'));
}

@ApiTags(AuthController.name)
@Controller(`${ApiVersion.v1}/auth`)
export class AuthController {
  constructor(protected readonly service: AuthService) {}

  @Login()
  async login(@Body(ValidationPipe) loginDto: LoginDto) {
    return await this.service.login(loginDto);
  }

  @SSOLogin()
  async ssoLogin(@Body(ValidationPipe) ssoLoginDto: SSOLoginDto) {
    return await this.service.ssoLogin(ssoLoginDto);
  }

  @Logout()
  logout(@UserId() userId: number) {
    return;
  }
}
