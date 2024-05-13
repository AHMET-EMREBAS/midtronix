import { InjectRepository, Repository, RepositoryService } from '@mdtx/core';
import { Customer } from '@mdtx/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService extends RepositoryService<Customer> {
  constructor(@InjectRepository(Customer) repo: Repository<Customer>) {
    super(repo);
  }
}
