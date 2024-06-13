import {
  AdvanceLogger,
  AuthRouteBuilder,
  HasPermissionResponse,
  HasSessionResponse,
  PublicResource,
  UserDetail,
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
import {
  ForgotPasswordDto,
  HasPermissionDto,
  LoginDto,
  LoginWithSSODto,
} from './dto';
import { Response } from 'express';
import { AuthCredentials, AuthEnums, ResourceActions } from '@mdtx/common';
import { UpdatePasswordDto } from './dto/update-password.dto';
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
  async loginWithSSO(@Body(ValidationPipe) body: LoginWithSSODto) {
    this.logger.debug(this.loginWithSSO.name, body);
    return await this.service.ssoLogin(body);
  }

  @R.Logout()
  logout(@Res() res: Response) {
    this.logger.debug(this.logout.name);
    res.clearCookie(AuthEnums.ACCESS_TOKEN_NAME);
    res.send({ message: 'See you later.' });
    res.end();
  }

  @R.UpdatePassword()
  updatePassword(
    @UserId() userId: number,
    @Body(ValidationPipe) body: UpdatePasswordDto
  ) {
    console.log(body);
    this.logger.debug(this.updatePassword.name, { userId, body });
    return this.service.updatePassword(userId, body);
  }

  @R.HasSession()
  hasSession(): HasSessionResponse {
    return { hasSession: true };
  }

  @R.HasPermission()
  hasPermission(
    @Body(ValidationPipe) body: HasPermissionDto,
    @UserDetail() userDetail: AuthCredentials
  ): HasPermissionResponse {
    for (const role of userDetail.roles) {
      if (role.name === 'Admin') {
        return { hasPermission: true };
      }

      if (body.action === ResourceActions.READ) {
        if (role.name === 'Analist') {
          return { hasPermission: true };
        }
      }
      for (const permission of role.permissions) {
        if (permission.name === body.permission) {
          return { hasPermission: true };
        }
      }
    }
    return { hasPermission: false };
  }
}
