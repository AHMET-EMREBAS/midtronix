import { InjectRepository, Repository, RepositoryService } from '@mdtx/core';
import { CustomerAccount } from '@mdtx/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerAccountService extends RepositoryService<CustomerAccount> {
  constructor(
    @InjectRepository(CustomerAccount) repo: Repository<CustomerAccount>
  ) {
    super(repo);
  }
}
