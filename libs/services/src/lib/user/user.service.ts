import { InjectRepository, Repository, RepositoryService } from '@mdtx/core';
import { User } from '@mdtx/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService extends RepositoryService<User> {
  constructor(@InjectRepository(User) repo: Repository<User>) {
    super(repo);
  }
}
