import axios, { AxiosResponse } from 'axios';
import { bearer } from './bearer';
import { ILoginDto, ILoginResult } from '@mdtx/common';

/**
 * Returns bearer token
 * @returns
 */
export async function loginAndGetBearerToken(): Promise<string> {
  const res = await axios.post<ILoginDto, AxiosResponse<ILoginResult>>(
    'api/v1/auth/login',
    {
      username: 'user@example.com',
      password: '!Password123',
    }
  );

  const token = res.data.accesstoken;
  return bearer(token);
}
