import { Test, TestingModule } from '@nestjs/testing';
import { CustomerPermissionController } from './customer-permission.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import {
  CustomerPermission,
  CustomerPermissionEntities,
  testDBOptions,
} from '@mdtx/database';
import { Repository } from 'typeorm';
import { CustomerPermissionService } from './customer-permission.service';
import { RepositoryService } from '@mdtx/core';

describe('CustomerPermissionModuleTest', () => {
  let app: TestingModule;
  let controller: CustomerPermissionController;
  let repo: Repository<CustomerPermission>;
  let service: RepositoryService<CustomerPermission>;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(testDBOptions()),
        TypeOrmModule.forFeature([...CustomerPermissionEntities]),
      ],
      controllers: [CustomerPermissionController],
      providers: [CustomerPermissionService],
    }).compile();
    controller = app.get(CustomerPermissionController);
    repo = app.get(getRepositoryToken(CustomerPermission));

    service = app.get(CustomerPermissionService);
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
