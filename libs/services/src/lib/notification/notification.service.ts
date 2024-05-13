import { InjectRepository, Repository, RepositoryService } from '@mdtx/core';
import { Notification } from '@mdtx/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService extends RepositoryService<Notification> {
  constructor(@InjectRepository(Notification) repo: Repository<Notification>) {
    super(repo);
  }
}
