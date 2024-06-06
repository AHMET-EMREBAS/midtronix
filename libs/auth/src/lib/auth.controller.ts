import {
  AdvanceLogger,
  AuthRouteBuilder,
  PublicResource,
  UpdatePasswordResult,
  UserId,
  ValidationPipe,
} from '@mdtx/core';
import { Body, Post, Res, applyDecorators } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { ForgotPasswordDto, LoginDto, SSOLoginDto } from './dto';
import { Response } from 'express';
import { AuthCredentials, AuthEnums } from '@mdtx/common';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { AuthUserService } from './auth-user.service';
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

const R = AuthRouteBuilder.get();
@R.Controler()
export class AuthController {
  protected logger: AdvanceLogger;
  constructor(protected readonly service: AuthService) {
    this.logger = new AdvanceLogger('Auth');
  }

  @R.Login()
  async login(@Body(ValidationPipe) body: LoginDto) {
    this.logger.debug(this.login.name, body);
    return await this.service.login(body);
  }

  @R.ForgotPassword()
  async forgotPassword(@Body(ValidationPipe) body: ForgotPasswordDto) {
    this.logger.debug(this.forgotPassword.name, body);
    return await this.service.forgotPassword(body);
  }

  @R.LoginWithSSO()
  async loginWithSSO(@Body(ValidationPipe) body: SSOLoginDto) {
    this.logger.debug(this.loginWithSSO.name, body);
    return await this.service.ssoLogin(body);
  }

  @R.Logout()
  logout(@Res() res: Response) {
    this.logger.debug(this.logout.name);
    res.clearCookie(AuthEnums.ACCESS_TOKEN_NAME);
    res.end({ message: 'See you later.' });
  }

  @R.UpdatePassword()
  updatePassword(
    @UserId() userId: number,
    @Body(ValidationPipe) body: UpdatePasswordDto
  ) {
    this.logger.debug(this.updatePassword.name, { userId, body });
    return this.service.updatePassword(userId, body);
  }
}
