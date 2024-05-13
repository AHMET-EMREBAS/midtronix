import { InjectRepository, Repository, RepositoryService } from '@mdtx/core';
import { Category } from '@mdtx/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService extends RepositoryService<Category> {
  constructor(@InjectRepository(Category) repo: Repository<Category>) {
    super(repo);
  }
}
