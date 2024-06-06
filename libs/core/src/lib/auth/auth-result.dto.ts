import { IForgotPasswordResult, ILoginResult } from '@mdtx/common';
import { Property } from '../property';

export class LoginResult implements ILoginResult {
  @Property({ type: 'string' })
  accesstoken!: string;
}

export class ForgotPasswordResult implements IForgotPasswordResult {
  @Property({ type: 'string' })
  message!: string;
}

export class LogoutResult extends ForgotPasswordResult {}

export class LoginWithSSOResult extends ForgotPasswordResult {}

export class UpdatePasswordResult extends ForgotPasswordResult {}
