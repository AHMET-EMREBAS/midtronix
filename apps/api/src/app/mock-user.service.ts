import { AuthUserService } from '@mdtx/auth';
import { AuthCredentials } from '@mdtx/common';
import { NotFoundException } from '@nestjs/common';

import { genSaltSync, hashSync } from 'bcrypt';

export class MockUserService implements AuthUserService {
  protected readonly users: AuthCredentials[] = [
    {
      id: 1,
      username: 'user@example.com',
      password: hashSync('!Password123', genSaltSync(8)),
      roles: [],
    },
    {
      id: 2,
      username: 'user2@example.com',
      password: hashSync('!Password123', genSaltSync(8)),
      roles: [],
    },
    {
      id: 3,
      username: 'user3@example.com',
      password: hashSync('!Password123', genSaltSync(8)),
      roles: [],
    },
  ];
  findOneByUsername(username: string): Promise<AuthCredentials> {
    const found = this.users.find((e) => e.username == username);
    if (found) {
      return new Promise((res) => res(found));
    }
    throw new NotFoundException();
  }
  findOneById(id: number): Promise<AuthCredentials> {
    const found = this.users.find((e) => e.id == id);
    if (found) {
      return new Promise((res) => res(found));
    }
    throw new NotFoundException();
  }
}
