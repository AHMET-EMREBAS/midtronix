import { InjectRepository, Repository, RepositoryService } from '@mdtx/core';
import { Sale } from '@mdtx/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SaleService extends RepositoryService<Sale> {
  constructor(@InjectRepository(Sale) repo: Repository<Sale>) {
    super(repo);
  }
}
