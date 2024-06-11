import { ResourceHttpClientFactory } from '@mdtx/common';
import { AuthTokenStore } from './auth-token-store';

export class DefaultResourceHttpClientFactory extends ResourceHttpClientFactory {
  constructor() {
    super(`api/v1`, {
      headers: {
        Authorization: `Bearer ${AuthTokenStore.get()}`,
      },
    });
  }
}

export const DefaultResourceHttpClientFactoryInstance =
  new DefaultResourceHttpClientFactory();
