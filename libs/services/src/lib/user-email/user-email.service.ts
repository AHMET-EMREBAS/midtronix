import { InjectRepository, Repository, RepositoryService } from '@mdtx/core';
import { UserEmail } from '@mdtx/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserEmailService extends RepositoryService<UserEmail> {
  constructor(@InjectRepository(UserEmail) repo: Repository<UserEmail>) {
    super(repo);
  }
}
