import { InjectRepository, Repository, RepositoryService } from '@mdtx/core';
import { Project } from '@mdtx/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectService extends RepositoryService<Project> {
  constructor(@InjectRepository(Project) repo: Repository<Project>) {
    super(repo);
  }
}
