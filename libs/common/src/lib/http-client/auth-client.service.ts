import { AuthApiPathBuilder, AuthApiPaths } from '@mdtx/utils';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import {
  IForgotPasswordDto,
  IForgotPasswordResult,
  ILoginDto,
  ILoginResult,
  ILogoutResult,
  IUpdatePasswordDto,
  IUpdatePasswordResult,
} from '../auth';

export class AuthClientService {
  readonly apiPaths!: AuthApiPaths;

  constructor(
    protected readonly prefix: string,
    public readonly axiosConfig?: AxiosRequestConfig
  ) {
    this.apiPaths = AuthApiPathBuilder.get();
  }

  __config() {
    return this.axiosConfig;
  }

  protected parseResult<T>(res: AxiosResponse<T>) {
    return res.data;
  }

  __path(path: string) {
    return `${this.prefix}/${path}`;
  }

  async login(body: ILoginDto) {
    const res = await axios.post<ILoginDto, AxiosResponse<ILoginResult>>(
      this.__path(this.apiPaths.LoginPath),
      body,
      this.__config()
    );
    return this.parseResult(res);
  }

  async logout() {
    const res = await axios.post<any, AxiosResponse<ILogoutResult>>(
      this.__path(this.apiPaths.LogoutPath),
      undefined,
      this.__config()
    );
    return this.parseResult(res);
  }

  async forgotPassword(body: IForgotPasswordDto) {
    const res = await axios.post<any, AxiosResponse<IForgotPasswordResult>>(
      this.__path(this.apiPaths.ForgotPasswordPath),
      body,
      this.__config()
    );
    return this.parseResult(res);
  }

  async updatePassword(body: IUpdatePasswordDto) {
    const res = await axios.post<any, AxiosResponse<IUpdatePasswordResult>>(
      this.__path(this.apiPaths.UpdatePasswordPath),
      body,
      this.__config()
    );
    return this.parseResult(res);
  }
}
