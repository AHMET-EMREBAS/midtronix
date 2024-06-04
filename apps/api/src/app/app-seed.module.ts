// /* eslint-disable @typescript-eslint/no-unused-vars */
// import {
//   Cart,
//   CartView,
//   Category,
//   Customer,
//   CustomerAccount,
//   CustomerBadge,
//   CustomerPoint,
//   Department,
//   Discount,
//   DiscountView,
//   Manufacturer,
//   Order,
//   OrderView,
//   Permission,
//   Price,
//   PriceLevel,
//   Product,
//   Quantity,
//   Role,
//   Sku,
//   SkuView,
//   Store,
//   User,
//   UserBadge,
//   UserPoint,
// } from '@mdtx/database';
// import { Inject, Module, OnModuleInit } from '@nestjs/common';
// import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import {
//   saveCategories,
//   saveCustomers,
//   saveDepartments,
//   saveEmployees,
//   saveManufacturers,
//   savePriceLevels,
//   saveProducts,
//   saveStores,
// } from './seed';

// @Module({
//   imports: [
//     TypeOrmModule.forFeature([
//       Category,
//       Department,
//       Manufacturer,
//       Store,
//       Sku,
//       SkuView,
//       Product,
//       Price,
//       Quantity,
//       PriceLevel,
//       Permission,
//       Role,
//       User,
//       Customer,
//       CustomerAccount,
//       Cart,
//       CartView,
//       Order,
//       OrderView,
//       Discount,
//       DiscountView,
//       UserBadge,
//       CustomerBadge,
//       UserPoint,
//       CustomerPoint,
//     ]),
//   ],
// })
// export class AppSeedModule implements OnModuleInit {
//   constructor(
//     @InjectRepository(Category)
//     protected readonly CategoryRepo: Repository<Category>,
//     @InjectRepository(Department)
//     protected readonly DepartmentRepo: Repository<Department>,
//     @InjectRepository(Manufacturer)
//     protected readonly ManufacturerRepo: Repository<Manufacturer>,
//     @InjectRepository(Store) protected readonly StoreRepo: Repository<Store>,
//     @InjectRepository(Sku) protected readonly SkuRepo: Repository<Sku>,
//     @InjectRepository(Product)
//     protected readonly ProductRepo: Repository<Product>,
//     @InjectRepository(Price) protected readonly PriceRepo: Repository<Price>,
//     @InjectRepository(Quantity)
//     protected readonly QuantityRepo: Repository<Quantity>,
//     @InjectRepository(PriceLevel)
//     protected readonly PriceLevelRepo: Repository<PriceLevel>,
//     @InjectRepository(Permission)
//     protected readonly PermissionRepo: Repository<Permission>,
//     @InjectRepository(Role)
//     protected readonly RoleRepo: Repository<Role>,
//     @InjectRepository(User)
//     protected readonly UserRepo: Repository<User>,
//     @InjectRepository(Customer)
//     protected readonly CustomerRepo: Repository<Customer>,

//     @InjectRepository(Cart) protected readonly CartRepo: Repository<Cart>,

//     @InjectRepository(CartView)
//     protected readonly CartViewRepo: Repository<CartView>,

//     @InjectRepository(Order) protected readonly OrderRepo: Repository<Order>,

//     @InjectRepository(OrderView)
//     protected readonly OrderViewRepo: Repository<OrderView>,

//     @InjectRepository(SkuView)
//     protected readonly SkuViewRepo: Repository<SkuView>,
//     @InjectRepository(Discount)
//     protected readonly DiscountRepo: Repository<Discount>,
//     @InjectRepository(DiscountView)
//     protected readonly DiscountViewRepo: Repository<DiscountView>
//   ) {}
//   async onModuleInit() {
//     await saveManufacturers(this.ManufacturerRepo);
//     await saveDepartments(this.DepartmentRepo);
//     await saveCategories(this.CategoryRepo);
//     await saveStores(this.StoreRepo);
//     await savePriceLevels(this.PriceLevelRepo);
//     await saveEmployees(this.UserRepo);
//     await saveCustomers(this.CustomerRepo);
//     await saveProducts(this.ProductRepo);
//   }
// }
