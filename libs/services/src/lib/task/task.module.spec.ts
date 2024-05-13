import { Test, TestingModule } from '@nestjs/testing';
import { TaskController } from './task.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Task, TaskEntities, testDBOptions } from '@mdtx/database';
import { Repository } from 'typeorm';
import { TaskService } from './task.service';
import { RepositoryService } from '@mdtx/core';

describe('TaskModuleTest', () => {
  let app: TestingModule;
  let controller: TaskController;
  let repo: Repository<Task>;
  let service: RepositoryService<Task>;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(testDBOptions()),
        TypeOrmModule.forFeature([...TaskEntities]),
      ],
      controllers: [TaskController],
      providers: [TaskService],
    }).compile();
    controller = app.get(TaskController);
    repo = app.get(getRepositoryToken(Task));

    service = app.get(TaskService);
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
