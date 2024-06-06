import { HttpClient } from './http-client.service';
describe('HttpClientService', () => {
  let httpClient: HttpClient<any, any, any, any>;
  beforeAll(() => {
    httpClient = new HttpClient('Sample', 'api/v1');
  });

  it('should resolve paths correctly', () => {
    expect(httpClient.__idpath(1)).toBe('api/v1/sample/1');
    expect(httpClient.__idpath(2)).toBe('api/v1/sample/2');
    expect(httpClient.__plural()).toBe('api/v1/samples');
    expect(httpClient.__singular()).toBe('api/v1/sample');
  });
});