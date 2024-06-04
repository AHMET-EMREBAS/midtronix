/* eslint-disable @typescript-eslint/no-unused-vars */
import { DataSource, Repository } from '@mdtx/core';
import { testDB } from './__test';
import { Category, Department } from './meta';
import { Price, PriceLevel, Product, Quantity, Sku } from './product';
import { Store } from './store';
import { Manufacturer } from './manufacturer';
import { QuantityView, PriceView, SkuView, ProductView } from './product.view';
import { Order } from './order';
import { Cart } from './cart/cart';
import { OrderView } from './order.view';
import { CartView } from './cart/cart.view';
import { User } from './user';
import { Customer } from './customer';
import { UserEntities, CustomerEntities } from './__entities';
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
  let CartRepo: Repository<Cart>;
  let CartViewRepo: Repository<CartView>;
  let OrderRepo: Repository<Order>;
  let OrderViewRepo: Repository<OrderView>;
  let UserRepo: Repository<User>;
  let CustomerRepo: Repository<Customer>;

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
      ProductView,
      QuantityView,
      PriceView,
      SkuView,
      Cart,
      CartView,
      Order,
      OrderView,
      ...UserEntities,
      ...CustomerEntities,
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

    CartRepo = ds.getRepository(Cart);
    CartViewRepo = ds.getRepository(CartView);
    OrderRepo = ds.getRepository(Order);
    OrderViewRepo = ds.getRepository(OrderView);
    UserRepo = ds.getRepository(User);
    CustomerRepo = ds.getRepository(Customer);
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

    expect(CartRepo).toBeTruthy();
    expect(CartViewRepo).toBeTruthy();
    expect(OrderRepo).toBeTruthy();
    expect(OrderViewRepo).toBeTruthy();
  });

  it('should create sku-view', async () => {
    let priceLevelCount = 0;
    let productCount = 0;
    let skuCount = 0;
    let priceCount = 0;
    let quantityCount = 0;
    let storeCount = 0;

    let orderCount = 0;
    let cartCount = 0;

    let customerCount = 0;
    let userCount = 0;

    const category = await CategoryRepo.save({ name: 'Default' });
    const department = await DepartmentRepo.save({ name: 'Default' });

    const createStore = async (count = ++storeCount) =>
      await StoreRepo.save({ name: `STORE_${count}` });

    const createPriceLevel = async (count = ++priceLevelCount) =>
      await PriceLevelRepo.save({ name: `PL_${count}` });

    const createProduct = async (count = ++productCount) =>
      await ProductRepo.save({
        name: `PRODUCT_${count}`,
        upc: `10000000000${count}`,
        category,
        department,
      });

    const createSku = async (product: Product, count = ++skuCount) =>
      await SkuRepo.save({
        name: `SKU_${count}`,
        product,
        upc: `10000000${product.id}${count}`,
      });

    const createPrice = async (
      sku: Sku,
      priceLevel: PriceLevel,
      count = ++priceCount
    ) =>
      await PriceRepo.save({
        price: count * 100,
        cost: count * 100,
        sku,
        priceLevel,
      });

    const createQuantity = async (
      sku: Sku,
      store: Store,
      count = ++quantityCount
    ) => await QuantityRepo.save({ quantity: count * 10, sku, store });

    const createUser = async (count = ++userCount) =>
      await UserRepo.save({
        username: `user${count}@gmail.com`,
        password: `Password123!`,
      });

    const createCustomer = async (count = ++userCount) =>
      await CustomerRepo.save({
        username: `customer${count}@gmail.com`,
        password: 'Password123!',
      });

    const createCart = async (store: Store, owner: Customer, user: User) =>
      await CartRepo.save({ store, owner: owner, user });

    const createOrder = async (cart: Cart, sku: Sku, quantity: number) =>
      await OrderRepo.save({ cart, sku, quantity });

    const user1 = await createUser();
    const user2 = await createUser();
    const user3 = await createUser();

    const customer1 = await createCustomer();
    const customer2 = await createCustomer();
    const customer3 = await createCustomer();

    const store1 = await createStore();
    const store2 = await createStore();
    const store3 = await createStore();

    const pl1 = await createPriceLevel();
    const pl2 = await createPriceLevel();
    const pl3 = await createPriceLevel();

    const p1 = await createProduct();
    const p2 = await createProduct();
    const p3 = await createProduct();

    const s1p1 = await createSku(p1);
    const s2p1 = await createSku(p1);
    const s3p1 = await createSku(p1);

    const s1p2 = await createSku(p2);
    const s2p2 = await createSku(p2);
    const s3p2 = await createSku(p2);

    const s1p3 = await createSku(p3);
    const s2p3 = await createSku(p3);
    const s3p3 = await createSku(p3);

    const s1p1pl1 = await createPrice(s1p1, pl1);
    const s1p1pl2 = await createPrice(s1p1, pl2);
    const s1p1pl3 = await createPrice(s1p1, pl3);
    const s2p1pl1 = await createPrice(s2p1, pl1);
    const s2p1pl2 = await createPrice(s2p1, pl2);
    const s2p1pl3 = await createPrice(s2p1, pl3);
    const s3p1pl1 = await createPrice(s3p1, pl1);
    const s3p1pl2 = await createPrice(s3p1, pl2);
    const s3p1pl3 = await createPrice(s3p1, pl3);

    const s1p2pl1 = await createPrice(s1p2, pl1);
    const s1p2pl2 = await createPrice(s1p2, pl2);
    const s1p2pl3 = await createPrice(s1p2, pl3);
    const s2p2pl1 = await createPrice(s2p2, pl1);
    const s2p2pl2 = await createPrice(s2p2, pl2);
    const s2p2pl3 = await createPrice(s2p2, pl3);
    const s3p2pl1 = await createPrice(s3p2, pl1);
    const s3p2pl2 = await createPrice(s3p2, pl2);
    const s3p2pl3 = await createPrice(s3p2, pl3);

    const s1p3pl1 = await createPrice(s1p3, pl1);
    const s1p3pl2 = await createPrice(s1p3, pl2);
    const s1p3pl3 = await createPrice(s1p3, pl3);
    const s2p3pl1 = await createPrice(s2p3, pl1);
    const s2p3pl2 = await createPrice(s2p3, pl2);
    const s2p3pl3 = await createPrice(s2p3, pl3);
    const s3p3pl1 = await createPrice(s3p3, pl1);
    const s3p3pl2 = await createPrice(s3p3, pl2);
    const s3p3pl3 = await createPrice(s3p3, pl3);

    // Quantities
    const qs1p1pl1 = await createQuantity(s1p1, store1);
    const qs1p1pl2 = await createQuantity(s1p1, store2);
    const qs1p1pl3 = await createQuantity(s1p1, store3);
    const qs2p1pl1 = await createQuantity(s2p1, store1);
    const qs2p1pl2 = await createQuantity(s2p1, store2);
    const qs2p1pl3 = await createQuantity(s2p1, store3);
    const qs3p1pl1 = await createQuantity(s3p1, store1);
    const qs3p1pl2 = await createQuantity(s3p1, store2);
    const qs3p1pl3 = await createQuantity(s3p1, store3);

    const qs1p2pl1 = await createQuantity(s1p2, store1);
    const qs1p2pl2 = await createQuantity(s1p2, store2);
    const qs1p2pl3 = await createQuantity(s1p2, store3);
    const qs2p2pl1 = await createQuantity(s2p2, store1);
    const qs2p2pl2 = await createQuantity(s2p2, store2);
    const qs2p2pl3 = await createQuantity(s2p2, store3);
    const qs3p2pl1 = await createQuantity(s3p2, store1);
    const qs3p2pl2 = await createQuantity(s3p2, store2);
    const qs3p2pl3 = await createQuantity(s3p2, store3);

    const qs1p3pl1 = await createQuantity(s1p3, store1);
    const qs1p3pl2 = await createQuantity(s1p3, store2);
    const qs1p3pl3 = await createQuantity(s1p3, store3);
    const qs2p3pl1 = await createQuantity(s2p3, store1);
    const qs2p3pl2 = await createQuantity(s2p3, store2);
    const qs2p3pl3 = await createQuantity(s2p3, store3);
    const qs3p3pl1 = await createQuantity(s3p3, store1);
    const qs3p3pl2 = await createQuantity(s3p3, store2);
    const qs3p3pl3 = await createQuantity(s3p3, store3);

    const c1 = await createCart(store1, customer1, user1);
    const c2 = await createCart(store1, customer1, user1);

    const c1o1 = createOrder(c1, s1p1, 1);
    const c1o2 = createOrder(c1, s1p2, 1);
    const c1o3 = createOrder(c1, s1p3, 1);

    const orderViews = await OrderViewRepo.find();

    console.log(orderViews);

    // console.log('All : ');

    // const result = await SkuViewRepo.find();
    // console.log('First: ');
    // console.log(result[0]);
    // console.log('Last: ');
    // console.log(result[result.length - 1]);

    // console.log('Barcode : 1000000039 PriceLevel: PL_1  Store:STORE_1 ');

    // console.log(
    //   await SkuViewRepo.find({
    //     where: { barcode: '1000000039', priceLevelId: 1, storeId: 1 },
    //   })
    // );

    // console.log('Barcode : 1000000011 PriceLevel: PL_1  Store:STORE_1 ');

    // console.log(
    //   await SkuViewRepo.findOne({
    //     where: { barcode: '1000000011', priceLevelId: 1, storeId: 1 },
    //   })
    // );
    // console.log(
    //   await SkuViewRepo.findOne({
    //     where: { barcode: '1000000012', priceLevelId: 1, storeId: 1 },
    //   })
    // );
    // console.log(
    //   await SkuViewRepo.findOne({
    //     where: { barcode: '1000000013', priceLevelId: 1, storeId: 1 },
    //   })
    // );

    // Create Cart and test it.
  });

  afterAll(() => {
    ds.destroy();
  });
});
