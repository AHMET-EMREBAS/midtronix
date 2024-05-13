import { InjectRepository, Repository, RepositoryService } from '@mdtx/core';
import { CustomerPhone } from '@mdtx/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerPhoneService extends RepositoryService<CustomerPhone> {
  constructor(
    @InjectRepository(CustomerPhone) repo: Repository<CustomerPhone>
  ) {
    super(repo);
  }
}
