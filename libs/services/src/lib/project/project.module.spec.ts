import { Test, TestingModule } from '@nestjs/testing';
import { ProjectController } from './project.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Project, ProjectEntities, testDBOptions } from '@mdtx/database';
import { Repository } from 'typeorm';
import { ProjectService } from './project.service';
import { RepositoryService } from '@mdtx/core';

describe('ProjectModuleTest', () => {
  let app: TestingModule;
  let controller: ProjectController;
  let repo: Repository<Project>;
  let service: RepositoryService<Project>;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(testDBOptions()),
        TypeOrmModule.forFeature([...ProjectEntities]),
      ],
      controllers: [ProjectController],
      providers: [ProjectService],
    }).compile();
    controller = app.get(ProjectController);
    repo = app.get(getRepositoryToken(Project));

    service = app.get(ProjectService);
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
