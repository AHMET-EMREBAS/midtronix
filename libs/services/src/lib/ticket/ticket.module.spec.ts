import { Test, TestingModule } from '@nestjs/testing';
import { TicketController } from './ticket.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Ticket, TicketEntities, testDBOptions } from '@mdtx/database';
import { Repository } from 'typeorm';
import { TicketService } from './ticket.service';
import { RepositoryService } from '@mdtx/core';

describe('TicketModuleTest', () => {
  let app: TestingModule;
  let controller: TicketController;
  let repo: Repository<Ticket>;
  let service: RepositoryService<Ticket>;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(testDBOptions()),
        TypeOrmModule.forFeature([...TicketEntities]),
      ],
      controllers: [TicketController],
      providers: [TicketService],
    }).compile();
    controller = app.get(TicketController);
    repo = app.get(getRepositoryToken(Ticket));

    service = app.get(TicketService);
  });

  it('should initialize classes', () => {
    expect(app).toBeDefined();
    expect(controller).toBeDefined();
    expect(repo).toBeDefined();
    expect(service).toBeTruthy();
  });

  afterAll(() => {
    repo.manager.connection.destroy();
  });
});
