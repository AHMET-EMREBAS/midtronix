import { DataSource, Repository } from '@mdtx/core';
import { testDB } from './__test';
import { Category, Department } from './meta';
import { Price, PriceLevel, Product, Quantity, Sku } from './product';
import { Store } from './store';
import { Manufacturer } from './manufacturer';
import { QuantityView, PriceView, SkuView } from './product.view';
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
  let PriceLevelRepo: Repository<PriceLevel>;
  let QuantityViewRepo: Repository<QuantityView>;
  let PriceViewRepo: Repository<PriceView>;
  let SkuViewRepo: Repository<SkuView>;

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
      PriceLevel,
      QuantityView,
      PriceView,
      SkuView,
    ]);

    ProductRepo = await ds.getRepository(Product);
    CategoryRepo = await ds.getRepository(Category);
    DepartmentRepo = await ds.getRepository(Department);
    SkuRepo = await ds.getRepository(Sku);
    QuantityRepo = await ds.getRepository(Quantity);
    PriceRepo = await ds.getRepository(Price);
    StoreRepo = await ds.getRepository(Store);
    ManufacturerRepo = await ds.getRepository(Manufacturer);
    PriceLevelRepo = await ds.getRepository(PriceLevel);
    QuantityViewRepo = await ds.getRepository(QuantityView);
    PriceViewRepo = await ds.getRepository(PriceView);
    SkuViewRepo = await ds.getRepository(SkuView);
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
    expect(PriceLevelRepo).toBeTruthy();
    expect(QuantityViewRepo).toBeTruthy();
    expect(PriceViewRepo).toBeTruthy();
    expect(SkuViewRepo).toBeTruthy();
  });

  it('should create sku-view', async () => {
    const P11 = await ProductRepo.save({ name: 'P11', upc: '100100100100' });
    const P22 = await ProductRepo.save({ name: 'P22', upc: '100100100200' });
    const P33 = await ProductRepo.save({ name: 'P33', upc: '100100100300' });

    const P11_1 = await SkuRepo.save({ name: 'P11_1', upc: '100100100101' });
    const P11_2 = await SkuRepo.save({ name: 'P11_2', upc: '100100100102' });
    const P11_3 = await SkuRepo.save({ name: 'P11_3', upc: '100100100103' });

    const P22_1 = await SkuRepo.save({ name: 'P22_1', upc: '100100100201' });
    const P22_2 = await SkuRepo.save({ name: 'P22_2', upc: '100100100202' });
    const P22_3 = await SkuRepo.save({ name: 'P22_3', upc: '100100100203' });

    const P33_1 = await SkuRepo.save({ name: 'P33_1', upc: '100100100301' });
    const P33_2 = await SkuRepo.save({ name: 'P33_2', upc: '100100100302' });
    const P33_3 = await SkuRepo.save({ name: 'P33_3', upc: '100100100303' });

    const PL1 = await PriceLevelRepo.save({ name: 'PL1' });
    const PL2 = await PriceLevelRepo.save({ name: 'PL2' });
    const PL3 = await PriceLevelRepo.save({ name: 'PL3' });

    await PriceRepo.save({ priceLevel: PL1, price: 100, cost: 50, sku: P11_1 });

    expect(1).toBe(1);
  });

  afterAll(() => {
    ds.destroy();
  });
});
