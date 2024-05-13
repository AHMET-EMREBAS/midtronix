import { InjectRepository, Repository, RepositoryService } from '@mdtx/core';
import { ProductVideo } from '@mdtx/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductVideoService extends RepositoryService<ProductVideo> {
  constructor(@InjectRepository(ProductVideo) repo: Repository<ProductVideo>) {
    super(repo);
  }
}
