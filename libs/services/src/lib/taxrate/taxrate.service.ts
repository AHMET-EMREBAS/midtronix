import { InjectRepository, Repository, RepositoryService } from '@mdtx/core';
import { Taxrate } from '@mdtx/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TaxrateService extends RepositoryService<Taxrate> {
  constructor(@InjectRepository(Taxrate) repo: Repository<Taxrate>) {
    super(repo);
  }
}
