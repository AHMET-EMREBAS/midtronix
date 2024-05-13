import { Test, TestingModule } from '@nestjs/testing';
import { SprintController } from './sprint.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Sprint, SprintEntities, testDBOptions } from '@mdtx/database';
import { Repository } from 'typeorm';
import { SprintService } from './sprint.service';
import { RepositoryService } from '@mdtx/core';

describe('SprintModuleTest', () => {
  let app: TestingModule;
  let controller: SprintController;
  let repo: Repository<Sprint>;
  let service: RepositoryService<Sprint>;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(testDBOptions()),
        TypeOrmModule.forFeature([...SprintEntities]),
      ],
      controllers: [SprintController],
      providers: [SprintService],
    }).compile();
    controller = app.get(SprintController);
    repo = app.get(getRepositoryToken(Sprint));

    service = app.get(SprintService);
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
