import { DataSource, Repository } from 'typeorm';
import { Product, ProductView } from '@mdtx/entities';
import { Test } from '@nestjs/testing';
import { ProductModule } from './product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
describe('ProductModule', () => {
  let ds: DataSource;

  let productRepo: Repository<Product>;
  let productViewRepo: Repository<ProductView>;

  beforeAll(async () => {
    Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/product-module.sqlite',
          autoLoadEntities: true,
          synchronize: true,
          dropSchema: true,
        }),
        ProductModule,
      ],
    });
    ds = await new DataSource({
      type: 'better-sqlite3',
      database: 'tmp/database/product-module.sqlite',
      entities: [Product, ProductView],
      synchronize: true,
      dropSchema: true,
    }).initialize();

    productRepo = ds.getRepository(Product);
    productViewRepo = ds.getRepository(ProductView);
  });

  it('should initialize datasource', () => {
    expect(ds).toBeTruthy();
    expect(productRepo).toBeTruthy();
    expect(productViewRepo).toBeTruthy();
  });

  it('should get data', async () => {
    expect(await productRepo.find()).toBeTruthy();
    expect(await productViewRepo.find()).toBeTruthy();
  });

  afterAll(() => {
    ds.destroy();
  });
});
