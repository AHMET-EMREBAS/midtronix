import { Test, TestingModule } from '@nestjs/testing';
import { CustomerEmailController } from './customer-email.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import {
  CustomerEmail,
  CustomerEmailEntities,
  testDBOptions,
} from '@mdtx/database';
import { Repository } from 'typeorm';
import { CustomerEmailService } from './customer-email.service';
import { RepositoryService } from '@mdtx/core';

describe('CustomerEmailModuleTest', () => {
  let app: TestingModule;
  let controller: CustomerEmailController;
  let repo: Repository<CustomerEmail>;
  let service: RepositoryService<CustomerEmail>;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(testDBOptions()),
        TypeOrmModule.forFeature([...CustomerEmailEntities]),
      ],
      controllers: [CustomerEmailController],
      providers: [CustomerEmailService],
    }).compile();
    controller = app.get(CustomerEmailController);
    repo = app.get(getRepositoryToken(CustomerEmail));

    service = app.get(CustomerEmailService);
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
