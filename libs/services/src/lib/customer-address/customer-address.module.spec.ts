import { Test, TestingModule } from '@nestjs/testing';
import { CustomerAddressController } from './customer-address.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import {
  CustomerAddress,
  CustomerAddressEntities,
  testDBOptions,
} from '@mdtx/database';
import { Repository } from 'typeorm';
import { CustomerAddressService } from './customer-address.service';
import { RepositoryService } from '@mdtx/core';

describe('CustomerAddressModuleTest', () => {
  let app: TestingModule;
  let controller: CustomerAddressController;
  let repo: Repository<CustomerAddress>;
  let service: RepositoryService<CustomerAddress>;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(testDBOptions()),
        TypeOrmModule.forFeature([...CustomerAddressEntities]),
      ],
      controllers: [CustomerAddressController],
      providers: [CustomerAddressService],
    }).compile();
    controller = app.get(CustomerAddressController);
    repo = app.get(getRepositoryToken(CustomerAddress));

    service = app.get(CustomerAddressService);
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
