import { Test, TestingModule } from '@nestjs/testing';
import { PermissionController } from './permission.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Permission, testDBOptions } from '@mdtx/database';
import { Repository } from 'typeorm';
import { PermissionService } from './permission.service';
import { RepositoryService } from '@mdtx/core';

describe('PermissionModuleTest', () => {
  let app: TestingModule;
  let controller: PermissionController;
  let repo: Repository<Permission>;
  let service: RepositoryService<Permission>;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(testDBOptions()),
        TypeOrmModule.forFeature([Permission]),
      ],
      controllers: [PermissionController],
      providers: [PermissionService],
    }).compile();
    controller = app.get(PermissionController);
    repo = app.get(getRepositoryToken(Permission));

    service = app.get(PermissionService);
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
