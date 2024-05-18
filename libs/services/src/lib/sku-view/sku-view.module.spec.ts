import { Test, TestingModule } from '@nestjs/testing';
import { SkuViewController } from './sku-view.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { SkuView, SkuViewEntities, testDBOptions } from '@mdtx/database';
import { Repository } from 'typeorm';
import { SkuViewService } from './sku-view.service';
import { RepositoryService } from '@mdtx/core';

describe('SkuViewModuleTest', () => {
  let app: TestingModule;
  let controller: SkuViewController;
  let repo: Repository<SkuView>;
  let service: RepositoryService<SkuView>;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(testDBOptions()),
        TypeOrmModule.forFeature([...SkuViewEntities]),
      ],
      controllers: [SkuViewController],
      providers: [SkuViewService],
    }).compile();
    controller = app.get(SkuViewController);
    repo = app.get(getRepositoryToken(SkuView));

    service = app.get(SkuViewService);
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
