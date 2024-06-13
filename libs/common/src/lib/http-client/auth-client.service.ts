import { AuthApiPathBuilder, AuthApiPaths } from '@mdtx/utils';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import {
  IForgotPasswordDto,
  IForgotPasswordResponse,
  ILoginDto,
  ILoginResponse,
  ILoginWithSSODto,
  ILogoutResponse,
  IUpdatePasswordDto,
  IUpdatePasswordResponse,
} from '../auth';
import { IMessageResponse } from '../response';

export class AuthHttpClient {
  readonly apiPaths!: AuthApiPaths;

  constructor(
    protected readonly prefix: string,
    public readonly axiosConfig?: AxiosRequestConfig
  ) {
    this.apiPaths = AuthApiPathBuilder.get();
  }

  protected config(): AxiosRequestConfig {
    return this.axiosConfig || {};
  }

  protected parseResult<T>(res: AxiosResponse<T>) {
    return res.data;
  }

  protected path(path: string) {
    return `${this.prefix}/${path}`;
  }

  async login(body: ILoginDto) {
    const res = await axios.post<ILoginDto, AxiosResponse<ILoginResponse>>(
      this.path(this.apiPaths.LoginPath),
      body,
      this.config()
    );
    return this.parseResult(res);
  }

  async logout() {
    const res = await axios.post<any, AxiosResponse<ILogoutResponse>>(
      this.path(this.apiPaths.LogoutPath),
      undefined,
      this.config()
    );
    return this.parseResult(res);
  }

  async forgotPassword(body: IForgotPasswordDto) {
    const res = await axios.post<any, AxiosResponse<IForgotPasswordResponse>>(
      this.path(this.apiPaths.ForgotPasswordPath),
      body,
      this.config()
    );
    return this.parseResult(res);
  }

  async updatePassword(body: IUpdatePasswordDto) {
    const res = await axios.post<any, AxiosResponse<IUpdatePasswordResponse>>(
      this.path(this.apiPaths.UpdatePasswordPath),
      body,
      this.config()
    );
    return this.parseResult(res);
  }

  async loginWithSSO(body: ILoginWithSSODto) {
    const res = await axios.post<any, AxiosResponse<ILoginResponse>>(
      this.path(this.apiPaths.LoginWithSSOPath),
      body,
      this.config()
    );
    return this.parseResult(res);
  }

  async hasSession() {
    const res = await axios.post<any, AxiosResponse<IMessageResponse>>(
      this.path(this.apiPaths.HasSessionPath),
      {},
      this.config()
    );
    return this.parseResult(res);
  }
}
