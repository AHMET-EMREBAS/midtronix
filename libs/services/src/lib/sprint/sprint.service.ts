import { InjectRepository, Repository, RepositoryService } from '@mdtx/core';
import { Sprint } from '@mdtx/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SprintService extends RepositoryService<Sprint> {
  constructor(@InjectRepository(Sprint) repo: Repository<Sprint>) {
    super(repo);
  }
}
