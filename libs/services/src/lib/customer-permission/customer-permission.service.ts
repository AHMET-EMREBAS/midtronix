import { InjectRepository, Repository, RepositoryService } from '@mdtx/core';
import { CustomerPermission } from '@mdtx/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerPermissionService extends RepositoryService<CustomerPermission> {
  constructor(
    @InjectRepository(CustomerPermission) repo: Repository<CustomerPermission>
  ) {
    super(repo);
  }
}
