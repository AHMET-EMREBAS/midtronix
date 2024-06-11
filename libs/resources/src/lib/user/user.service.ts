import { User } from '@mdtx/entities';
import { Injectable } from '@nestjs/common';
import { BaseEntityService, UpdatePasswordResult } from '@mdtx/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { AuthUserService } from '@mdtx/auth';
import { AuthCredentials } from '@mdtx/common';
@Injectable()
export class UserService
  extends BaseEntityService<User>
  implements AuthUserService
{
  constructor(
    @InjectRepository(User) repo: Repository<User>,
    eventEmtiter: EventEmitter2
  ) {
    super(repo, eventEmtiter);
  }

  async findOneByUsername(username: string): Promise<AuthCredentials> {
    return await this.findOneBy('username', username);
  }
  async updatePassword(
    userId: number,
    newPassword: string
  ): Promise<UpdatePasswordResult> {
    const result = await this.updateOne(userId, { password: newPassword });

    return { message: 'Updated password' };
  }
}
