import { ResourceHttpClientFactory } from '@mdtx/common';
import { AxiosRequestConfig } from 'axios';
import { AuthTokenStore } from './auth-token-store';

export class DefaultResourceHttpClientFactory extends ResourceHttpClientFactory {
  constructor() {
    super(`api/v1`);
  }

  override config(): AxiosRequestConfig<any> {
    return {
      headers: {
        Authorization: `Bearer ${AuthTokenStore.get()}`,
      },
    };
  }
}

export const DefaultResourceHttpClientFactoryInstance =
  new DefaultResourceHttpClientFactory();
