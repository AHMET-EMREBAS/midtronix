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

    await httpClient.saveOne({ id: 1, name: 'Sample 1' });
    await httpClient.saveOne({ id: 2, name: 'Sample 2' });
    await httpClient.saveOne({ id: 3, name: 'Sample 3' });
  });

  it(`GET api/v1/samples`, async () => {
    const data = await httpClient.findAll();
    expect(data).toBeTruthy();
    expect(data.length).toBeGreaterThan(0);
  });

  it(`GET api/v1/sample/1`, async () => {
    const data = await httpClient.findOneById(1);
    expect(data).toBeTruthy();
    expect(data.name).toBeTruthy();
  });

  it(`PUT api/v1/sample/1`, async () => {
    const data = await httpClient.updateOne(1, { name: 'Updated value' });
    expect(data).toBeTruthy();
    expect(data.name).toBe('Updated value');
  });
});
