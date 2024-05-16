import { InjectRepository, Repository, RepositoryService } from '@mdtx/core';
import { Price } from '@mdtx/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PriceService extends RepositoryService<Price> {
  constructor(@InjectRepository(Price) repo: Repository<Price>) {
    super(repo);
  }
}
