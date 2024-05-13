import { InjectRepository, Repository, RepositoryService } from '@mdtx/core';
import { CustomerAddress } from '@mdtx/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerAddressService extends RepositoryService<CustomerAddress> {
  constructor(
    @InjectRepository(CustomerAddress) repo: Repository<CustomerAddress>
  ) {
    super(repo);
  }
}
