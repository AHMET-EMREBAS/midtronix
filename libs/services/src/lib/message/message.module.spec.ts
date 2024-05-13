import { Test, TestingModule } from '@nestjs/testing';
import { MessageController } from './message.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Message, MessageEntities, testDBOptions } from '@mdtx/database';
import { Repository } from 'typeorm';
import { MessageService } from './message.service';
import { RepositoryService } from '@mdtx/core';

describe('MessageModuleTest', () => {
  let app: TestingModule;
  let controller: MessageController;
  let repo: Repository<Message>;
  let service: RepositoryService<Message>;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(testDBOptions()),
        TypeOrmModule.forFeature([...MessageEntities]),
      ],
      controllers: [MessageController],
      providers: [MessageService],
    }).compile();
    controller = app.get(MessageController);
    repo = app.get(getRepositoryToken(Message));

    service = app.get(MessageService);
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
