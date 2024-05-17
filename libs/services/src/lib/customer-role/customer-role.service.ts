import { InjectRepository, Repository, RepositoryService } from '@mdtx/core';
import { CustomerRole } from '@mdtx/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerRoleService extends RepositoryService<CustomerRole> {
  constructor(@InjectRepository(CustomerRole) repo: Repository<CustomerRole>) {
    super(repo);
  }
}
