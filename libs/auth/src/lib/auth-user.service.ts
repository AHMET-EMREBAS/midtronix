import { AuthCredentials } from '@mdtx/common';

export interface AuthUserService {
  findOneByUsername(username: string): Promise<AuthCredentials>;
}
