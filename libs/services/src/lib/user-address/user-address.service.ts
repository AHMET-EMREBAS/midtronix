import { InjectRepository, Repository, RepositoryService } from '@mdtx/core';
import { UserAddress } from '@mdtx/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserAddressService extends RepositoryService<UserAddress> {
  constructor(@InjectRepository(UserAddress) repo: Repository<UserAddress>) {
    super(repo);
  }
}
