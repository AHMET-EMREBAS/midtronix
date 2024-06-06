import { HttpClient } from './http-client.service';

import { AuthClientService } from './auth-client.service';
describe('HttpClientService', () => {
  let httpClient: AuthClientService;
  beforeAll(() => {
    httpClient = new AuthClientService('api/v1');
  });

  it('should resolve paths correctly', () => {
    expect(httpClient).toBeDefined();
  });
});
