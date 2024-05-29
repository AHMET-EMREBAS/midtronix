import { InjectRepository, Repository, RepositoryService } from '@mdtx/core';
import { Purchase } from '@mdtx/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PurchaseService extends RepositoryService<Purchase> {
  constructor(@InjectRepository(Purchase) repo: Repository<Purchase>) {
    super(repo);
  }
}
