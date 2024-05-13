import { Test, TestingModule } from '@nestjs/testing';
import { ProductVideoController } from './product-video.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import {
  ProductVideo,
  ProductVideoEntities,
  testDBOptions,
} from '@mdtx/database';
import { Repository } from 'typeorm';
import { ProductVideoService } from './product-video.service';
import { RepositoryService } from '@mdtx/core';

describe('ProductVideoModuleTest', () => {
  let app: TestingModule;
  let controller: ProductVideoController;
  let repo: Repository<ProductVideo>;
  let service: RepositoryService<ProductVideo>;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(testDBOptions()),
        TypeOrmModule.forFeature([...ProductVideoEntities]),
      ],
      controllers: [ProductVideoController],
      providers: [ProductVideoService],
    }).compile();
    controller = app.get(ProductVideoController);
    repo = app.get(getRepositoryToken(ProductVideo));

    service = app.get(ProductVideoService);
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
