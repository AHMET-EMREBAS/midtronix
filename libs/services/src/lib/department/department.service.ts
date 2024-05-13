import { InjectRepository, Repository, RepositoryService } from '@mdtx/core';
import { Department } from '@mdtx/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DepartmentService extends RepositoryService<Department> {
  constructor(@InjectRepository(Department) repo: Repository<Department>) {
    super(repo);
  }
}
