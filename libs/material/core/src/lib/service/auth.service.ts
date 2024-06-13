import { Injectable } from '@angular/core';
import { AuthHttpClient } from '@mdtx/common';
import { AuthTokenStore } from './auth-token-store';
import { AxiosRequestConfig } from 'axios';

@Injectable()
export class AuthService extends AuthHttpClient {
  constructor() {
    super('http://localhost:3000/api/v1/auth');
  }

  protected override config(): AxiosRequestConfig<any> {
    return {
      headers: {
        Authorization: `Bearer ${AuthTokenStore.get()}`,
      },
    };
  }
}
