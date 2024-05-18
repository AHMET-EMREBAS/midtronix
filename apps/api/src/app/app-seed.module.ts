/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Category,
  Customer,
  Department,
  Permission,
  Price,
  PriceLevel,
  Product,
  Quantity,
  Role,
  Sku,
  Store,
  User,
} from '@mdtx/database';
import { Module, OnModuleInit } from '@nestjs/common';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Category,
      Department,
      Store,
      Sku,
      Product,
      Price,
      Quantity,
      PriceLevel,
      Permission,
      Role,
      User,
      Customer,
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
    protected readonly CustomerRepo: Repository<Customer>
  ) {}
  async onModuleInit() {
    let priceLevelCount = 0;
    let productCount = 0;
    let skuCount = 0;
    let priceCount = 0;
    let quantityCount = 0;
    let storeCount = 0;

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
        name: `SKU_${count}`,
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
  }
}
