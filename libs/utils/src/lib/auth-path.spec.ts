import { AuthApiPathBuilder } from './auth-api-path-builder';

describe('AuthPath', () => {
  it('should create paths', () => {
    const {
      ForgotPasswordPath: ForgotPassWordPath,
      HasPermissionPath,
      LoginPath,
      LoginWithSSOPath,
      LogoutAllPath,
      LogoutPath,
      SignupPath,
      UpdatePasswordPath,
    } = AuthApiPathBuilder.get();

    expect(ForgotPassWordPath).toBe('forgot-password');
    expect(HasPermissionPath).toBe('has-permission');
    expect(LoginPath).toBe('login');
    expect(LogoutPath).toBe('logout');
    expect(LogoutAllPath).toBe('logout-all');
    expect(LoginWithSSOPath).toBe('login-with-sso');
    expect(SignupPath).toBe('signup');
    expect(UpdatePasswordPath).toBe('update-password');
  });
});
