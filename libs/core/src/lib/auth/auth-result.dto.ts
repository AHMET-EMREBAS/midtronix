import { IForgotPasswordResponse, ILoginResponse } from '@mdtx/common';
import { Property } from '../property';

export class LoginResult implements ILoginResponse {
  @Property({ type: 'string' })
  accesstoken!: string;
}

export class ForgotPasswordResult implements IForgotPasswordResponse {
  @Property({ type: 'string' })
  message!: string;
}

export class LogoutResult extends ForgotPasswordResult {}

export class LoginWithSSOResult extends ForgotPasswordResult {}

export class UpdatePasswordResult extends ForgotPasswordResult {}
