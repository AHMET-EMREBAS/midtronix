export type AuthApiPaths = {
  LoginPath: string;
  LoginWithSSOPath: string;
  ForgotPasswordPath: string;
  SignupPath: string;
  LogoutPath: string;
  LogoutAllPath: string;
  HasPermissionPath: string;
  UpdatePasswordPath: string;
};

export class AuthApiPathBuilder {
  readonly LoginPath = 'login';
  readonly LoginWithSSOPath = 'login-with-sso';
  readonly ForgotPasswordPath = 'forgot-password';
  readonly SignupPath = 'signup';
  readonly LogoutPath = 'logout';
  readonly LogoutAllPath = 'logout-all';
  readonly HasPermissionPath = 'has-permission';
  readonly UpdatePasswordPath = 'update-password';

  static get(): AuthApiPaths {
    return new AuthApiPathBuilder();
  }
}
