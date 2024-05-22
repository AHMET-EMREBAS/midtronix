/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Cart,
  CartView,
  Category,
  Customer,
  CustomerBadge,
  CustomerPoint,
  Department,
  Discount,
  DiscountView,
  Order,
  OrderView,
  Permission,
  Price,
  PriceLevel,
  Product,
  Quantity,
  Role,
  Sku,
  SkuView,
  Store,
  User,
  UserBadge,
  UserPoint,
} from '@mdtx/database';
import { Inject, Module, OnModuleInit } from '@nestjs/common';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Category,
      Department,
      Store,
      Sku,
      SkuView,
      Product,
      Price,
      Quantity,
      PriceLevel,
      Permission,
      Role,
      User,
      Customer,
      Cart,
      CartView,
      Order,
      OrderView,
      Discount,
      DiscountView,
      UserBadge,
      CustomerBadge,
      UserPoint,
      CustomerPoint,
    ]),
  ],
})
export class AppSeedModule implements OnModuleInit {
  constructor(
    @InjectRepository(Category)
    protected readonly CategoryRepo: Repository<Category>,
    @InjectRepository(Department)
    protected readonly DepartmentRepo: Repository<Department>,
    @InjectRepository(Store) protected readonly StoreRepo: Repository<Store>,
    @InjectRepository(Sku) protected readonly SkuRepo: Repository<Sku>,
    @InjectRepository(Product)
    protected readonly ProductRepo: Repository<Product>,
    @InjectRepository(Price) protected readonly PriceRepo: Repository<Price>,
    @InjectRepository(Quantity)
    protected readonly QuantityRepo: Repository<Quantity>,
    @InjectRepository(PriceLevel)
    protected readonly PriceLevelRepo: Repository<PriceLevel>,
    @InjectRepository(Permission)
    protected readonly PermissionRepo: Repository<Permission>,
    @InjectRepository(Role)
    protected readonly RoleRepo: Repository<Role>,
    @InjectRepository(User)
    protected readonly UserRepo: Repository<User>,
    @InjectRepository(Customer)
    protected readonly CustomerRepo: Repository<Customer>,

    @InjectRepository(Cart) protected readonly CartRepo: Repository<Cart>,

    @InjectRepository(CartView)
    protected readonly CartViewRepo: Repository<CartView>,

    @InjectRepository(Order) protected readonly OrderRepo: Repository<Order>,

    @InjectRepository(OrderView)
    protected readonly OrderViewRepo: Repository<OrderView>,

    @InjectRepository(SkuView)
    protected readonly SkuViewRepo: Repository<SkuView>,
    @InjectRepository(Discount)
    protected readonly DiscountRepo: Repository<Discount>,
    @InjectRepository(DiscountView)
    protected readonly DiscountViewRepo: Repository<DiscountView>
  ) {}
  async onModuleInit() {
    let priceLevelCount = 0;
    let productCount = 0;
    let skuCount = 0;
    let priceCount = 0;
    let quantityCount = 0;
    let storeCount = 0;
    let userCount = 0;

    const category = await this.CategoryRepo.save({ name: 'Default Category' });
    const department = await this.DepartmentRepo.save({
      name: 'Default Department',
    });

    const createStore = async (count = ++storeCount) =>
      await this.StoreRepo.save({ name: `STORE_${count}` });

    const createPriceLevel = async (count = ++priceLevelCount) =>
      await this.PriceLevelRepo.save({ name: `PL_${count}` });

    const createProduct = async (count = ++productCount) =>
      await this.ProductRepo.save({
        name: `PRODUCT_${count}`,
        upc: `10000000000${count}`,
        category,
        department,
      });

    const createSku = async (product: Product, count = ++skuCount) =>
      await this.SkuRepo.save({
        name: `${product.name}_SKU_${count}`,
        upc: `1000000000${product.id}${count}`,
        product,
      });

    const createPrice = async (
      sku: Sku,
      priceLevel: PriceLevel,
      count = ++priceCount
    ) =>
      await this.PriceRepo.save({
        price: count * 100,
        cost: count * 100,
        sku,
        priceLevel,
      });

    const createQuantity = async (
      sku: Sku,
      store: Store,
      count = ++quantityCount
    ) => await this.QuantityRepo.save({ quantity: count * 10, sku, store });

    const createUser = async (count = ++userCount) =>
      await this.UserRepo.save({
        username: `user${count}@gmail.com`,
        password: `Password123!`,
      });

    const createCustomer = async (count = ++userCount) =>
      await this.CustomerRepo.save({
        username: `customer${count}@gmail.com`,
        password: 'Password123!',
      });

    const createCart = async (store: Store, owner: Customer, user: User) =>
      await this.CartRepo.save({ store, owner: owner, user });

    const createOrder = async (
      cart: Cart,
      sku: Sku,
      priceLevel: PriceLevel,
      quantity: number
    ) => await this.OrderRepo.save({ cart, sku, quantity, priceLevel });

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

    const cart1 = await createCart(store1, customer1, user1);
    const cart2 = await createCart(store1, customer1, user1);

    const order1 = await createOrder(cart1, s1p1, pl1, 3);
    const order2 = await createOrder(cart1, s1p2, pl1, 3);
    const order3 = await createOrder(cart1, s1p3, pl1, 3);
    const order4 = await createOrder(cart1, s2p1, pl1, 3);
    const order5 = await createOrder(cart1, s2p2, pl1, 3);
    const order6 = await createOrder(cart1, s2p3, pl1, 3);

    const discount1 = await this.DiscountRepo.save({
      name: 'D1',
      startDate: new Date('5/20/2024'),
      endDate: new Date('5/24/2024'),
      fixed: 10,
      skus: [s1p1, s3p1, s3p3, s3p2],
    });

    const printDiscounts = async () => {
      const discounts = await this.DiscountViewRepo.find();
      console.log(discounts);
    };

    const carts = await this.CartRepo.find();

    const printOrders = async () => {
      const orders = await this.OrderViewRepo.find({});
      console.log(orders);
    };

    await printOrders();
    const skus = await this.SkuViewRepo.find({});

    await this.OrderRepo.update(5, { priceLevel: pl3 });
    await printOrders();

    // console.log(skus);
    await printDiscounts();

    await this.DiscountRepo.createQueryBuilder()
      .relation('skus')
      .of(discount1.id)
      .add(s1p2.id);

    await printOrders();
    await printDiscounts();
  }
}
