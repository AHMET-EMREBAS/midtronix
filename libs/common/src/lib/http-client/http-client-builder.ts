import { AxiosRequestConfig } from 'axios';
import { ResourceHttpClient } from './resource-http-client.service';
import { AuthHttpClient } from './auth-client.service';

export class HttpClientBuilder {
  constructor(
    protected readonly prefix: string,
    protected readonly requestConfig?: AxiosRequestConfig
  ) {}

  resourceClient(entityName: string): ResourceHttpClient {
    return new ResourceHttpClient(entityName, this.prefix, this.requestConfig);
  }

  authClient() {
    return new AuthHttpClient(this.prefix, this.requestConfig);
  }
}
