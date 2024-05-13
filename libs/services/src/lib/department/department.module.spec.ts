import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentController } from './department.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Department, testDBOptions } from '@mdtx/database';
import { Repository } from 'typeorm';
import { DepartmentService } from './department.service';
import { RepositoryService } from '@mdtx/core';

describe('DepartmentModuleTest', () => {
  let app: TestingModule;
  let controller: DepartmentController;
  let repo: Repository<Department>;
  let service: RepositoryService<Department>;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(testDBOptions()),
        TypeOrmModule.forFeature([Department]),
      ],
      controllers: [DepartmentController],
      providers: [DepartmentService],
    }).compile();
    controller = app.get(DepartmentController);
    repo = app.get(getRepositoryToken(Department));

    service = app.get(DepartmentService);
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
