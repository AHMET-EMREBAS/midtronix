import { ApiVersion, HttpClient } from '@mdtx/common';
import {
  ISample,
  IQuerySampleDto,
  ICreateSampleDto,
  IUpdateSampleDto,
} from '@mdtx/models';
import { loginAndGetBearerToken } from '../support/login';

const API_PREFIX = `api/${ApiVersion.v1}`;

describe('Sample', () => {
  let d1, d2, d3;
  let httpClient: HttpClient<
    ISample,
    ICreateSampleDto,
    IUpdateSampleDto,
    IQuerySampleDto
  >;

  beforeAll(async () => {
    const bearerToken = await loginAndGetBearerToken();

    httpClient = new HttpClient<
      ISample,
      ICreateSampleDto,
      IUpdateSampleDto,
      IQuerySampleDto
    >('Sample', API_PREFIX, { headers: { Authorization: bearerToken } });

    d1 = await httpClient.saveOne({ name: 'Test data 1' });
    d2 = await httpClient.saveOne({ name: 'Test data 2' });
    d3 = await httpClient.saveOne({ name: 'Test data 3' });
  });

  it(`GET api/v1/samples`, async () => {
    const data = await httpClient.findAll();
    expect(data).toBeTruthy();
    expect(data.length).toBeGreaterThan(2);
  });

  it(`GET api/v1/sample/1`, async () => {
    const data = await httpClient.findOneById(d1.id);
    expect(data.name).toBe('Test data 1');
    expect(data.name).toBeTruthy();
  });

  it(`PUT api/v1/sample/1`, async () => {
    const data = await httpClient.updateOne(d1.id, {
      name: 'Test data updated',
    });
    expect(data).toBeTruthy();
    expect(data.name).toBe('Test data updated');
  });

  afterAll(async () => {
    for (const f of [d1, d2, d3]) {
      await httpClient.deleteOneById(f.id);
    }
  });
});
