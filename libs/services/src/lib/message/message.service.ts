import { InjectRepository, Repository, RepositoryService } from '@mdtx/core';
import { Message } from '@mdtx/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageService extends RepositoryService<Message> {
  constructor(@InjectRepository(Message) repo: Repository<Message>) {
    super(repo);
  }
}
