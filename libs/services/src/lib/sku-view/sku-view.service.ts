import { InjectRepository, Repository, RepositoryService } from '@mdtx/core';
import { SkuView } from '@mdtx/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SkuViewService extends RepositoryService<SkuView> {
  constructor(@InjectRepository(SkuView) repo: Repository<SkuView>) {
    super(repo);
  }
}
