import { Test, TestingModule } from '@nestjs/testing';
import { ProductImageController } from './product-image.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import {
  ProductImage,
  ProductImageEntities,
  testDBOptions,
} from '@mdtx/database';
import { Repository } from 'typeorm';
import { ProductImageService } from './product-image.service';
import { RepositoryService } from '@mdtx/core';

describe('ProductImageModuleTest', () => {
  let app: TestingModule;
  let controller: ProductImageController;
  let repo: Repository<ProductImage>;
  let service: RepositoryService<ProductImage>;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(testDBOptions()),
        TypeOrmModule.forFeature([...ProductImageEntities]),
      ],
      controllers: [ProductImageController],
      providers: [ProductImageService],
    }).compile();
    controller = app.get(ProductImageController);
    repo = app.get(getRepositoryToken(ProductImage));

    service = app.get(ProductImageService);
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
