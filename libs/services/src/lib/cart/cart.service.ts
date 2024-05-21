import { InjectRepository, Repository, RepositoryService } from '@mdtx/core';
import { Cart } from '@mdtx/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CartService extends RepositoryService<Cart> {
  constructor(@InjectRepository(Cart) repo: Repository<Cart>) {
    super(repo);
  }
}
