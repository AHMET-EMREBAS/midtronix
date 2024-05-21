import { InjectRepository, Repository, RepositoryService } from '@mdtx/core';
import { Order } from '@mdtx/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService extends RepositoryService<Order> {
  constructor(@InjectRepository(Order) repo: Repository<Order>) {
    super(repo);
  }
}
