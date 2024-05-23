import { Test, TestingModule } from '@nestjs/testing';
import { SaleController } from './sale.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Sale, SaleEntities, testDBOptions } from '@mdtx/database';
import { Repository } from 'typeorm';
import { SaleService } from './sale.service';
import { RepositoryService } from '@mdtx/core';

describe('SaleModuleTest', () => {
  let app: TestingModule;
  let controller: SaleController;
  let repo: Repository<Sale>;
  let service: RepositoryService<Sale>;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(testDBOptions()),
        TypeOrmModule.forFeature([...SaleEntities]),
      ],
      controllers: [SaleController],
      providers: [SaleService],
    }).compile();
    controller = app.get(SaleController);
    repo = app.get(getRepositoryToken(Sale));

    service = app.get(SaleService);
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
