import { Test, TestingModule } from '@nestjs/testing';
import { CustomerRoleController } from './customer-role.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import {
  CustomerRole,
  CustomerRoleEntities,
  testDBOptions,
} from '@mdtx/database';
import { Repository } from 'typeorm';
import { CustomerRoleService } from './customer-role.service';
import { RepositoryService } from '@mdtx/core';

describe('CustomerRoleModuleTest', () => {
  let app: TestingModule;
  let controller: CustomerRoleController;
  let repo: Repository<CustomerRole>;
  let service: RepositoryService<CustomerRole>;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(testDBOptions()),
        TypeOrmModule.forFeature([...CustomerRoleEntities]),
      ],
      controllers: [CustomerRoleController],
      providers: [CustomerRoleService],
    }).compile();
    controller = app.get(CustomerRoleController);
    repo = app.get(getRepositoryToken(CustomerRole));

    service = app.get(CustomerRoleService);
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
