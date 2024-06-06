import axios, { AxiosRequestConfig } from 'axios';
import { bearer } from '../support/bearer';
import { HttpClient } from '@mdtx/common';
import {
  ISample,
  IQuerySampleDto,
  ICreateSampleDto,
  IUpdateSampleDto,
} from '@mdtx/models';

describe('Sample', () => {
  let s1;
  let s2;
  let bearerToken: string;

  let httpClient: HttpClient<
    ISample,
    ICreateSampleDto,
    IUpdateSampleDto,
    IQuerySampleDto
  >;
  beforeAll(async () => {
    const res = await axios.post('api/v1/auth/login', {
      username: 'user@example.com',
      password: '!Password123',
    });

    const token = res.data.authtoken;

    bearerToken = bearer(token);

    httpClient = new HttpClient<
      ISample,
      ICreateSampleDto,
      IUpdateSampleDto,
      IQuerySampleDto
    >('Sample', 'api/v1', {
      headers: {
        Authorization: bearerToken,
      },
    });

    
  });

  it('GET api/v1/samples', async () => {
    const data = await httpClient.findAll();
    expect(data).toBeTruthy();
    expect(data.length).toBeGreaterThan(0);

    expect(data.find((e) => e.name === s1.name)).toBe('Sample 1');
    expect(data.find((e) => e.name === s2.name)).toBe('Sample 2');
  });

  //   describe('Smoke', () => {
  // it.each(pluralPaths)(`GET /api/v1/%s`, async (value) => {
  //   const res = await axios.get(rpath(value));
  //   expect(res.status).toBe(200);
  //   expect(res.data).toBeTruthy();
  // });
  // it.each(metadataPaths)(`GET /api/v1/%s`, async (value) => {
  //   const res = await axios.get(rpath(value));
  //   expect(res.status).toBe(200);
  //   expect(res.data).toBeTruthy();
  // });
  // it.each(singularIDPaths)(`GET /api/v1/%s`, async (value) => {
  //   try {
  //     const result = await axios.get(rpath(value));
  //     fail(result);
  //   } catch (error) {
  //     const res = error.response;
  //     expect(res.status).toBe(404);
  //     expect(res.data).toBeTruthy();
  //     expect(res.data.message).toBe('Entity Not Found');
  //   }
  // });
  // it.each(singularIDPaths)(`DELETE /api/v1/%s`, async (value) => {
  //   try {
  //     const result = await axios.delete(rpath(value));
  //     fail(result);
  //   } catch (error) {
  //     const res = error.response;
  //     expect(res.status).toBe(404);
  //     expect(res.data).toBeTruthy();
  //     expect(res.data.message).toBe('Entity Not Found');
  //   }
  // });
  // it.each(singularIDPaths)(`PUT /api/v1/%s`, async (value) => {
  //   try {
  //     const result = await axios.put(rpath(value));
  //     fail(result);
  //   } catch (error) {
  //     const res = error.response;
  //     expect(res.status).toBe(404);
  //     expect(res.data).toBeTruthy();
  //     expect(res.data.message).toBe('Entity Not Found');
  //   }
  // });
  // it.each(singularPostPaths)(`POST /api/v1/%s`, async (value) => {
  //   try {
  //     const result = await axios.post(rpath(value));
  //     fail(result);
  //   } catch (error) {
  //     const res = error.response;
  //     expect(res.status).toBe(422);
  //     expect(res.data).toBeTruthy();
  //     expect(res.data.message).toBe('Input Validation Error');
  //   }
  // });
  //   });
});
