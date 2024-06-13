import { Injectable } from '@angular/core';
import { AuthHttpClient } from '@mdtx/common';
import { AuthTokenStore } from './auth-token-store';

@Injectable()
export class AuthService extends AuthHttpClient {
  constructor() {
    super('http://localhost:3000/api/v1/auth', {
      headers: {
        Authorization: `Bearer ${AuthTokenStore.get()}`,
      },
    });
  }
}
