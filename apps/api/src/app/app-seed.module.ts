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
    for (const i of [1, 2, 3, 4, 5]) {
      await this.CategoryRepo.save({ name: `category ${i}` });
      await this.DepartmentRepo.save({ name: `Department ${i}` });
      await this.StoreRepo.save({ name: `Store ${i}` });
      await this.PriceLevelRepo.save({ name: `PriceLevel ${i}` });
    }

    for (const i of [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ]) {
      await this.ProductRepo.save({
        name: `Product ${i}`,
        category: { id: (i % 5) + 1 },
        upc: `123456789011${i}`,
      });
    }

    for (const i of [1, 2, 3, 4, 5]) {
      await this.SkuRepo.save({
        name: `Sku ${i}`,
        upc: `123456789011${i}`,
        product: { id: i },
      });
      await this.QuantityRepo.save({
        quantity: 1,
        store: { id: i },
        sku: { id: i },
      });
    }

    for (const i of [1, 2, 3, 4, 5]) {
      await this.PriceRepo.save({
        price: 1,
        cost: 1,
        sku: { id: i },
        priceLevel: { id: i },
      });
    }

    for (const i of [1, 2, 3, 4, 5, 6, 7]) {
      await this.PermissionRepo.save({ name: `Permission ${i}` });
    }

    for (const i of [1, 2, 3, 4, 5, 6, 7]) {
      await this.RoleRepo.save({
        name: `Role ${i}`,
        permissions: [{ id: (i % 3) + 1 }],
      });
    }

    for (const i of [1, 2, 3, 4, 6, 7]) {
      await this.UserRepo.save({
        username: `user${i}@gmail.com`,
        password: `Password!${i}`,
        roles: [{ id: (i % 3) + 1 }],
      });
      await this.CustomerRepo.save({
        username: `customer${i}@gmail.com`,
        password: `Password!${i}`,
      });
    }
  }
}
