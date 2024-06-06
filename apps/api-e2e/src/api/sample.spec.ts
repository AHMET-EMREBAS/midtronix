import {} from '@mdtx/core';
import { ApiVersion, HttpClient } from '@mdtx/common';
import {
  ISample,
  IQuerySampleDto,
  ICreateSampleDto,
  IUpdateSampleDto,
} from '@mdtx/models';
import { loginAndGetBearerToken } from '../support/login';
import axios from 'axios';

const samples: ICreateSampleDto[] = [
  { name: 'sample 1' },
  { name: 'sample 2' },
  { name: 'sample 3' },
];

const API_PREFIX = `api/${ApiVersion.v1}`;

describe('Sample', () => {
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

    await httpClient.saveOne({ name: 'Test data 1' });
    await httpClient.saveOne({ name: 'Test data 2' });
    await httpClient.saveOne({ name: 'Test data 3' });
  });

  it(`GET api/v1/samples`, async () => {
    const data = await httpClient.findAll();
    expect(data).toBeTruthy();
    expect(data.length).toBeGreaterThan(0);
  });

  it(`GET api/v1/sample/1`, async () => {
    const [first, ...rest] = await httpClient.findAll({
      take: 1,
      name: 'cn:Test data 1',
    });
    const data = await httpClient.findOneById(first.id);

    expect(data.name).toBe('Test data 1');
    expect(data.name).toBeTruthy();
  });

  it(`PUT api/v1/sample/1`, async () => {
    const [first] = await httpClient.findAll({ name: 'cn:Test data', take: 1 });

    const result = await httpClient.updateOne(first.id, {
      name: 'Test data updated',
    });
    expect(result).toBeTruthy();
    expect(result.name).toBe('Test data updated');
  });

  afterAll(async () => {
    const foundItems = await httpClient.findAll({ name: 'cn:Test data' });
    for (const f of foundItems) {
      await httpClient.deleteOneById(f.id);
    }
  });
});
