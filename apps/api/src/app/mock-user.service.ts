import { AuthUserService } from '@mdtx/auth';
import { AuthCredentials } from '@mdtx/common';
import { PermissionBuilder, UpdatePasswordResult } from '@mdtx/core';
import { NotFoundException } from '@nestjs/common';

import { genSaltSync, hashSync } from 'bcrypt';

const permission = PermissionBuilder.raw('Sample');

export class MockUserService implements AuthUserService {
  protected readonly users: AuthCredentials[] = [
    {
      id: 1,
      username: 'user@example.com',
      password: hashSync('!Password123', genSaltSync(8)),
      roles: [
        {
          id: 1,
          name: 'Manager',
          permissions: [
            { id: 1, name: permission.WRITE },
            { id: 2, name: permission.READ },
            { id: 2, name: permission.WRITE },
            { id: 2, name: permission.UPDATE },
            { id: 2, name: permission.DELETE },
            { id: 2, name: permission.MANAGE },
          ],
        },
      ],
    },
    {
      id: 2,
      username: 'user2@example.com',
      password: hashSync('!Password123', genSaltSync(8)),
      roles: [
        {
          id: 1,
          name: 'Reader',
          permissions: [{ id: 2, name: permission.READ }],
        },
      ],
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

  async updatePassword(
    userId: number,
    newPassword: string
  ): Promise<UpdatePasswordResult> {
    const foundUser = await this.findOneById(userId);

    foundUser.password = hashSync(newPassword, genSaltSync(8));

    return { message: 'Updated password' };
    throw new Error('Method not implemented.');
  }
}
