import { Controller, Get, Post, applyDecorators } from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import {
  ForgotPasswordResult,
  LoginResult,
  LoginWithSSOResult,
  LogoutResult,
  PublicResource,
  UpdatePasswordResult,
} from '../auth';
import { ValidationPipe } from '../dto';
import { ApiVersion, AuthEnums } from '@mdtx/common';
import { AuthApiPathBuilder, AuthApiPaths } from '@mdtx/utils';

export class AuthRouteBuilder {
  protected readonly AP: AuthApiPaths;

  private constructor(
    protected readonly validationPipe: typeof ValidationPipe,
    protected readonly version: ApiVersion = ApiVersion.v1
  ) {
    this.AP = AuthApiPathBuilder.get();
  }

  static get(version = ApiVersion.v1) {
    return new AuthRouteBuilder(ValidationPipe, version);
  }

  protected CommonResponses() {
    return applyDecorators(
      ApiInternalServerErrorResponse({ description: 'Internal Server Error!' }),
      ApiUnauthorizedResponse({ description: 'User not authorized!' }),
      ApiUnprocessableEntityResponse({
        description: 'Input validation error or Unique constraint!',
      })
    );
  }

  Controler() {
    return applyDecorators(
      Controller(`${this.version}/auth`),
      ApiTags(`AuthControler-${this.version}`)
    );
  }

  Login() {
    return applyDecorators(
      ApiOperation({ summary: 'Login with credentials, username & password' }),
      Post(this.AP.LoginPath),
      ApiOkResponse({ description: 'Success', type: LoginResult }),
      PublicResource(),
      this.CommonResponses()
    );
  }

  Logout() {
    return applyDecorators(
      ApiOperation({ summary: 'Logout' }),
      Post(this.AP.LogoutPath),
      ApiOkResponse({ description: 'success', type: LogoutResult }),
      ApiBearerAuth(AuthEnums.BEARER),
      this.CommonResponses()
    );
  }

  ForgotPassword() {
    return applyDecorators(
      ApiOperation({
        summary:
          'Request a password recovery. The service will send you a link to your email address that allows you to update your password.',
      }),
      Post(this.AP.ForgotPasswordPath),
      ApiOkResponse({ description: 'success', type: ForgotPasswordResult }),
      PublicResource(),
      this.CommonResponses()
    );
  }

  LoginWithSSO() {
    return applyDecorators(
      ApiOperation({ summary: 'Login with Single Sign-On' }),
      Post(this.AP.LoginWithSSOPath),
      ApiOkResponse({ description: 'success', type: LoginWithSSOResult }),
      PublicResource(),
      this.CommonResponses()
    );
  }

  UpdatePassword() {
    return applyDecorators(
      ApiOperation({ summary: 'Update password by Single Sign-On' }),
      Post(this.AP.UpdatePasswordPath),
      ApiOkResponse({ description: 'success', type: UpdatePasswordResult }),
      ApiBearerAuth(AuthEnums.BEARER),
      this.CommonResponses()
    );
  }
}
