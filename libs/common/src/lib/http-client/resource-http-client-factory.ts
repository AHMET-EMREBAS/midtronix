import { AxiosRequestConfig } from 'axios';
import { ResourceHttpClient } from './resource-http-client.service';

export class ResourceHttpClientFactory {
  constructor(protected readonly prefix: string) {}

  create(entityName: string): ResourceHttpClient {
    return new ResourceHttpClient(entityName, this.prefix, this.config());
  }

  config(): AxiosRequestConfig {
    throw new Error('Not Implemented');
  }
}
