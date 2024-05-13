import { InjectRepository, Repository, RepositoryService } from '@mdtx/core';
import { UserPhone } from '@mdtx/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserPhoneService extends RepositoryService<UserPhone> {
  constructor(@InjectRepository(UserPhone) repo: Repository<UserPhone>) {
    super(repo);
  }
}
