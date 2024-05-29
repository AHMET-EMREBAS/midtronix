import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseController } from './purchase.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Purchase, PurchaseEntities, testDBOptions } from '@mdtx/database';
import { Repository } from 'typeorm';
import { PurchaseService } from './purchase.service';
import { RepositoryService } from '@mdtx/core';

describe('PurchaseModuleTest', () => {
  let app: TestingModule;
  let controller: PurchaseController;
  let repo: Repository<Purchase>;
  let service: RepositoryService<Purchase>;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(testDBOptions()),
        TypeOrmModule.forFeature([...PurchaseEntities]),
      ],
      controllers: [PurchaseController],
      providers: [PurchaseService],
    }).compile();
    controller = app.get(PurchaseController);
    repo = app.get(getRepositoryToken(Purchase));

    service = app.get(PurchaseService);
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
