import { InjectRepository, Repository, RepositoryService } from '@mdtx/core';
import { Permission } from '@mdtx/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PermissionService extends RepositoryService<Permission> {
  constructor(@InjectRepository(Permission) repo: Repository<Permission>) {
    super(repo);
  }
}
