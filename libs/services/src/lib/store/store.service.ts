import { InjectRepository, Repository, RepositoryService } from '@mdtx/core';
import { Store } from '@mdtx/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StoreService extends RepositoryService<Store> {
  constructor(@InjectRepository(Store) repo: Repository<Store>) {
    super(repo);
  }
}
