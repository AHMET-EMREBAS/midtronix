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

describe('ProductModuleTest', () => {
  let app: TestingModule;
  let controller: ProductController;
  let repo: Repository<Product>;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(testDBOptions()),
        TypeOrmModule.forFeature([Product, Category, Department, Manufacturer]),
      ],
      controllers: [ProductController],
    }).compile();
    controller = app.get(ProductController);
    repo = app.get(getRepositoryToken(Product));
  });

  it('should initialize classes', () => {
    expect(app).toBeDefined();
    expect(controller).toBeDefined();
    expect(repo).toBeDefined();
  });

  afterAll(() => {
    repo.manager.connection.destroy();
  });
});
