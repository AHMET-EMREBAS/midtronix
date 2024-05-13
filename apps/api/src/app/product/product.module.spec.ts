import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import {
  Category,
  Department,
  Manufacturer,
  Product,
  testDBOptions,
} from '@mdtx/database';
import { Repository } from 'typeorm';
import { ProductService } from './product.service';
import { RepositoryService } from '@mdtx/core';

describe('ProductModuleTest', () => {
  let app: TestingModule;
  let controller: ProductController;
  let repo: Repository<Product>;
  let service: RepositoryService<Product>;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(testDBOptions()),
        TypeOrmModule.forFeature([Product, Category, Department, Manufacturer]),
      ],
      controllers: [ProductController],
      providers: [ProductService],
    }).compile();
    controller = app.get(ProductController);
    repo = app.get(getRepositoryToken(Product));

    service = app.get(ProductService);
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
