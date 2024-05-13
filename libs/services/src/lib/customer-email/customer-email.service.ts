import { InjectRepository, Repository, RepositoryService } from '@mdtx/core';
import { CustomerEmail } from '@mdtx/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerEmailService extends RepositoryService<CustomerEmail> {
  constructor(
    @InjectRepository(CustomerEmail) repo: Repository<CustomerEmail>
  ) {
    super(repo);
  }
}
