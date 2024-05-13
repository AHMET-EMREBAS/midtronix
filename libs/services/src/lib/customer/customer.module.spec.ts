import { Test, TestingModule } from '@nestjs/testing';
import { CustomerController } from './customer.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Customer, CustomerEntities, testDBOptions } from '@mdtx/database';
import { Repository } from 'typeorm';
import { CustomerService } from './customer.service';
import { RepositoryService } from '@mdtx/core';

describe('CustomerModuleTest', () => {
  let app: TestingModule;
  let controller: CustomerController;
  let repo: Repository<Customer>;
  let service: RepositoryService<Customer>;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(testDBOptions()),
        TypeOrmModule.forFeature([...CustomerEntities]),
      ],
      controllers: [CustomerController],
      providers: [CustomerService],
    }).compile();
    controller = app.get(CustomerController);
    repo = app.get(getRepositoryToken(Customer));

    service = app.get(CustomerService);
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
