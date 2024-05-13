import { InjectRepository, Repository, RepositoryService } from '@mdtx/core';
import { Task } from '@mdtx/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService extends RepositoryService<Task> {
  constructor(@InjectRepository(Task) repo: Repository<Task>) {
    super(repo);
  }
}
