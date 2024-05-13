import { Test, TestingModule } from '@nestjs/testing';
import { SkuController } from './sku.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Sku, SkuEntities, testDBOptions } from '@mdtx/database';
import { Repository } from 'typeorm';
import { SkuService } from './sku.service';
import { RepositoryService } from '@mdtx/core';

describe('SkuModuleTest', () => {
  let app: TestingModule;
  let controller: SkuController;
  let repo: Repository<Sku>;
  let service: RepositoryService<Sku>;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(testDBOptions()),
        TypeOrmModule.forFeature([...SkuEntities]),
      ],
      controllers: [SkuController],
      providers: [SkuService],
    }).compile();
    controller = app.get(SkuController);
    repo = app.get(getRepositoryToken(Sku));

    service = app.get(SkuService);
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
