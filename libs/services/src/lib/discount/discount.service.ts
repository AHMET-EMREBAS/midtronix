import { InjectRepository, Repository, RepositoryService } from '@mdtx/core';
import { Discount } from '@mdtx/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DiscountService extends RepositoryService<Discount> {
  constructor(@InjectRepository(Discount) repo: Repository<Discount>) {
    super(repo);
  }
}
