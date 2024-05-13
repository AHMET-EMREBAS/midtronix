import { InjectRepository, Repository, RepositoryService } from '@mdtx/core';
import { Sku } from '@mdtx/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SkuService extends RepositoryService<Sku> {
  constructor(@InjectRepository(Sku) repo: Repository<Sku>) {
    super(repo);
  }
}
