import { Test, TestingModule } from '@nestjs/testing';
import { CustomerAccountController } from './customer-account.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import {
  CustomerAccount,
  CustomerAccountEntities,
  testDBOptions,
} from '@mdtx/database';
import { Repository } from 'typeorm';
import { CustomerAccountService } from './customer-account.service';
import { RepositoryService } from '@mdtx/core';

describe('CustomerAccountModuleTest', () => {
  let app: TestingModule;
  let controller: CustomerAccountController;
  let repo: Repository<CustomerAccount>;
  let service: RepositoryService<CustomerAccount>;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(testDBOptions()),
        TypeOrmModule.forFeature([...CustomerAccountEntities]),
      ],
      controllers: [CustomerAccountController],
      providers: [CustomerAccountService],
    }).compile();
    controller = app.get(CustomerAccountController);
    repo = app.get(getRepositoryToken(CustomerAccount));

    service = app.get(CustomerAccountService);
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
