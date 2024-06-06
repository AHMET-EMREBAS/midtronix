import axios from 'axios';
import { bearer } from './bearer';

/**
 * Returns bearer token
 * @returns
 */
export async function loginAndGetBearerToken(): Promise<string> {
  const res = await axios.post('api/v1/auth/login', {
    username: 'user@example.com',
    password: '!Password123',
  });

  const token = res.data.authtoken;

  return bearer(token);
}
