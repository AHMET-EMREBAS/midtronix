import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductModule } from './product.module';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Product, testDBOptions } from '@mdtx/database';
import { INestApplication, Type } from '@nestjs/common';
import { Repository } from 'typeorm';
describe('ProductModuleTest', () => {
  let app: TestingModule;
  let controller: ProductController;
  let repo: Repository<Product>;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot(testDBOptions()), ProductModule],
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
});
