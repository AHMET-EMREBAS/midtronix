import { Test, TestingModule } from '@nestjs/testing';
import { CustomerPhoneController } from './customer-phone.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import {
  CustomerPhone,
  CustomerPhoneEntities,
  testDBOptions,
} from '@mdtx/database';
import { Repository } from 'typeorm';
import { CustomerPhoneService } from './customer-phone.service';
import { RepositoryService } from '@mdtx/core';

describe('CustomerPhoneModuleTest', () => {
  let app: TestingModule;
  let controller: CustomerPhoneController;
  let repo: Repository<CustomerPhone>;
  let service: RepositoryService<CustomerPhone>;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(testDBOptions()),
        TypeOrmModule.forFeature([...CustomerPhoneEntities]),
      ],
      controllers: [CustomerPhoneController],
      providers: [CustomerPhoneService],
    }).compile();
    controller = app.get(CustomerPhoneController);
    repo = app.get(getRepositoryToken(CustomerPhone));

    service = app.get(CustomerPhoneService);
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
