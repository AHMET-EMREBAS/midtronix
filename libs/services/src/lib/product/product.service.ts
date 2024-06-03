import { InjectRepository, Repository, RepositoryService } from '@mdtx/core';
import { Product, ProductView } from '@mdtx/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService extends RepositoryService<Product> {
  constructor(
    @InjectRepository(Product) repo: Repository<Product>,
    @InjectRepository(ProductView) viewRepo: Repository<ProductView>
  ) {
    super(repo, viewRepo);
  }
}
