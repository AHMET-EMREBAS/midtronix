import { InjectRepository, Repository, RepositoryService } from '@mdtx/core';
import { DiscountView } from '@mdtx/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DiscountViewService extends RepositoryService<DiscountView> {
  constructor(@InjectRepository(DiscountView) repo: Repository<DiscountView>) {
    super(repo);
  }
}
