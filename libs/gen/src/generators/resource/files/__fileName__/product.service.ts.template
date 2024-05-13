import { InjectRepository, Repository, RepositoryService } from '@mdtx/core';
import { Product } from '@mdtx/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService extends RepositoryService<Product> {
  constructor(@InjectRepository(Product) repo: Repository<Product>) {
    super(repo);
  }
}
