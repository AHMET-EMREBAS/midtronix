import { InjectRepository, Repository, RepositoryService } from '@mdtx/core';
import { Ticket } from '@mdtx/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TicketService extends RepositoryService<Ticket> {
  constructor(@InjectRepository(Ticket) repo: Repository<Ticket>) {
    super(repo);
  }
}
