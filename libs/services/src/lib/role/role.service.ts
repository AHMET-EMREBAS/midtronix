import { InjectRepository, Repository, RepositoryService } from '@mdtx/core';
import { Role } from '@mdtx/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RoleService extends RepositoryService<Role> {
  constructor(@InjectRepository(Role) repo: Repository<Role>) {
    super(repo);
  }
}
