import { IForgotPassword } from './forgot-password';
import { IForgotPasswordResult } from './forgot-password-result';
import { ILoginResult } from './login-result';
import { ILogin } from './login';
import { ICode } from './code';

export interface IAuthService {
  login(loginObj: ILogin): Promise<ILoginResult>;
  loginWithCode(codeObj: ICode): Promise<ILoginResult>;
  logout(): Promise<void>;
  forgotPassword(
    forgotPasswordObj: IForgotPassword
  ): Promise<IForgotPasswordResult>;
}
