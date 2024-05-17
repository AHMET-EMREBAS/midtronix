import { DataSource, Repository } from '@mdtx/core';
import { testDB } from './__test';
import { Category, Department } from './meta';
import { Price, Product, Quantity, Sku } from './product';
import { Store } from './store';
import { Manufacturer } from './manufacturer';
describe('ProductView', () => {
  let ds: DataSource;

  let ProductRepo: Repository<Product>;
  let CategoryRepo: Repository<Category>;
  let DepartmentRepo: Repository<Department>;
  let SkuRepo: Repository<Sku>;
  let QuantityRepo: Repository<Quantity>;
  let PriceRepo: Repository<Price>;
  let StoreRepo: Repository<Store>;
  let ManufacturerRepo: Repository<Manufacturer>;

  beforeAll(async () => {
    ds = await testDB([
      Product,
      Category,
      Department,
      Sku,
      Quantity,
      Price,
      Store,
      Manufacturer,
    ]);

    ProductRepo = await ds.getRepository(Product);
    CategoryRepo = await ds.getRepository(Category);
    DepartmentRepo = await ds.getRepository(Department);
    SkuRepo = await ds.getRepository(Sku);
    QuantityRepo = await ds.getRepository(Quantity);
    PriceRepo = await ds.getRepository(Price);
    StoreRepo = await ds.getRepository(Store);
    ManufacturerRepo = await ds.getRepository(Manufacturer);
  });

  it('should initialize the data source', () => {
    expect(ds).toBeTruthy();

    expect(ProductRepo).toBeTruthy();
    expect(CategoryRepo).toBeTruthy();
    expect(DepartmentRepo).toBeTruthy();
    expect(SkuRepo).toBeTruthy();
    expect(QuantityRepo).toBeTruthy();
    expect(PriceRepo).toBeTruthy();
    expect(StoreRepo).toBeTruthy();
    expect(ManufacturerRepo).toBeTruthy();
  });
});
