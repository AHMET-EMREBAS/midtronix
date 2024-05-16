import { InjectRepository, Repository, RepositoryService } from '@mdtx/core';
import { PriceLevel } from '@mdtx/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PriceLevelService extends RepositoryService<PriceLevel> {
  constructor(@InjectRepository(PriceLevel) repo: Repository<PriceLevel>) {
    super(repo);
  }
}
