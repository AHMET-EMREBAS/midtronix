import { Injectable, isDevMode } from '@angular/core';
import { AuthHttpClient } from '@mdtx/common';
import { AuthTokenStore } from './auth-token-store';
import { AxiosRequestConfig } from 'axios';

const basePath = isDevMode() ? 'http://localhost:3000/' : '';
@Injectable()
export class AuthService extends AuthHttpClient {
  constructor() {
    super(`${basePath}api/v1/auth`);
  }

  protected override config(): AxiosRequestConfig<any> {
    return {
      headers: {
        Authorization: `Bearer ${AuthTokenStore.get()}`,
      },
    };
  }
}
