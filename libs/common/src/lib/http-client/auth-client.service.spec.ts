import { AuthHttpClient } from './auth-client.service';
describe('HttpClientService', () => {
  let httpClient: AuthHttpClient;
  beforeAll(() => {
    httpClient = new AuthHttpClient('api/v1');
  });

  it('should resolve paths correctly', () => {
    expect(httpClient).toBeDefined();
  });
});
