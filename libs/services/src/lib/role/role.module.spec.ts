import { Test, TestingModule } from '@nestjs/testing';
import { RoleController } from './role.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Role, testDBOptions } from '@mdtx/database';
import { Repository } from 'typeorm';
import { RoleService } from './role.service';
import { RepositoryService } from '@mdtx/core';

describe('RoleModuleTest', () => {
  let app: TestingModule;
  let controller: RoleController;
  let repo: Repository<Role>;
  let service: RepositoryService<Role>;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(testDBOptions()),
        TypeOrmModule.forFeature([Role]),
      ],
      controllers: [RoleController],
      providers: [RoleService],
    }).compile();
    controller = app.get(RoleController);
    repo = app.get(getRepositoryToken(Role));

    service = app.get(RoleService);
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
