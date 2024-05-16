import { InjectRepository, Repository, RepositoryService } from '@mdtx/core';
import { Quantity } from '@mdtx/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class QuantityService extends RepositoryService<Quantity> {
  constructor(@InjectRepository(Quantity) repo: Repository<Quantity>) {
    super(repo);
  }
}
