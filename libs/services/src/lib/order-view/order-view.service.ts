import { InjectRepository, Repository, RepositoryService } from '@mdtx/core';
import { OrderView } from '@mdtx/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderViewService extends RepositoryService<OrderView> {
  constructor(@InjectRepository(OrderView) repo: Repository<OrderView>) {
    super(repo);
  }
}
