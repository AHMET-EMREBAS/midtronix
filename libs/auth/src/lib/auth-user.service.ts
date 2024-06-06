import { AuthCredentials } from '@mdtx/common';
import { UpdatePasswordResult } from '@mdtx/core';

export interface AuthUserService {
  findOneByUsername(username: string): Promise<AuthCredentials>;
  findOneById(id: number): Promise<AuthCredentials>;
  updatePassword(
    userId: number,
    newPassword: string
  ): Promise<UpdatePasswordResult>;
}
