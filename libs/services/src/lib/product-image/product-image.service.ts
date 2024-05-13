import { InjectRepository, Repository, RepositoryService } from '@mdtx/core';
import { ProductImage } from '@mdtx/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductImageService extends RepositoryService<ProductImage> {
  constructor(@InjectRepository(ProductImage) repo: Repository<ProductImage>) {
    super(repo);
  }
}
