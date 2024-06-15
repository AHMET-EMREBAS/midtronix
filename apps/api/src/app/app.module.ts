import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { isDevMode } from '@mdtx/core';
import {
  CategoryModule,
  SampleModule,
  StoreModule,
  SupplierModule,
  PriceLevelModule,
  ProductModule,
  PriceLevelService,
  StoreService,
  SupplierService,
  CategoryService,
  DepartmentService,
  DepartmentModule,
  ManufacturerService,
  ManufacturerModule,
  RoleModule,
  UserModule,
  EmailModule,
  AddressModule,
  PhoneModule,
  CustomerModule,
  PermissionModule,
  PermissionService,
  RoleService,
  UserService,
  ProductService,
  SerialNumberModule,
  SkuModule,
  AttributeModule,
  PriceModule,
  QuantityModule,
} from '@mdtx/resources';
import { EventEmitter2, EventEmitterModule } from '@nestjs/event-emitter';
import { AppEventService } from './app-event.service';
import { ConfigModule } from '@nestjs/config';
import { AuthGuard, AuthModule } from '@mdtx/auth';
import { AppController } from './app.controller';
import {
  Categories,
  Departments,
  Manufacturers,
  PriceLevels,
  Stores,
  Suppliers,
  Permissions,
  Users,
  Products,
} from './seed';
import { Roles } from './seed/roles';
import { ProductSubscriber, SkuSubscriber, User } from '@mdtx/entities';

@Module({
  imports: [
    ConfigModule.forRoot(),
    EventEmitterModule.forRoot({
      global: true,
      delimiter: '.',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'public'),
      renderPath: isDevMode('client-app', ''),
    }),
    TypeOrmModule.forRoot({
      // type: 'postgres',
      // database: 'bmsv2',
      // username: 'postgres',
      // password: 'password',
      // // type: 'better-sqlite3',
      // // database: 'tmp/database/dev.sqlite',
      // subscribers: [ProductSubscriber, SkuSubscriber],
      // autoLoadEntities: true,
      // synchronize: true,
      // dropSchema: true,
      // logger: 'debug',
      // logging: isDevMode(true, false),
      type: 'postgres',
      database: 'bmsv2',
      username: 'postgres',
      password: 'password',
      // type: 'better-sqlite3',
      // database: 'tmp/database/dev.sqlite',
      subscribers: [ProductSubscriber, SkuSubscriber],
      autoLoadEntities: true,
      logger: 'debug',
      logging: true,
    }),
    AuthModule.configure([User], UserService),
    SampleModule,
    CategoryModule,
    DepartmentModule,
    SupplierModule,
    StoreModule,
    PriceLevelModule,
    ProductModule,
    ManufacturerModule,
    RoleModule,
    UserModule,
    EmailModule,
    AddressModule,
    PhoneModule,
    CustomerModule,
    PermissionModule,
    SerialNumberModule,
    SkuModule,
    AttributeModule,
    PriceModule,
    QuantityModule,
  ],
  providers: [
    AppEventService,
    EventEmitter2,
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // },
  ],
  controllers: [AppController],
})
export class AppModule implements OnModuleInit {
  constructor(
    protected readonly priceLevelService: PriceLevelService,
    protected readonly storeService: StoreService,
    protected readonly supplierService: SupplierService,
    protected readonly categoryService: CategoryService,
    protected readonly departmentService: DepartmentService,
    protected readonly manufacturerService: ManufacturerService,
    protected readonly permissionService: PermissionService,
    protected readonly roleService: RoleService,
    protected readonly userService: UserService,
    protected readonly productService: ProductService
  ) {}

  async onModuleInit() {
    Permissions.forEach(async (e) => {
      try {
        await this.permissionService.saveOne(e);
      } catch (err) {
        // NONE
      }
    });

    Roles.forEach(async (e) => {
      try {
        await this.roleService.saveOne({ name: e });
      } catch (err) {
        //
      }
    });

    Categories.forEach(async (e) => {
      try {
        await this.categoryService.saveOne(e);
      } catch (err) {
        // NONE
      }
    });
    Departments.forEach(async (e) => {
      try {
        await this.departmentService.saveOne(e);
      } catch (err) {
        // NONE
      }
    });

    PriceLevels.forEach(async (e) => {
      try {
        await this.priceLevelService.saveOne(e);
      } catch (err) {
        // NONE
      }
    });

    Manufacturers.forEach(async (e) => {
      try {
        await this.manufacturerService.saveOne(e);
      } catch (err) {
        // NONE
      }
    });

    Suppliers.forEach(async (e) => {
      try {
        await this.supplierService.saveOne(e);
      } catch (err) {
        // NONE
      }
    });

    Stores.forEach(async (e) => {
      try {
        await this.storeService.saveOne(e);
      } catch (err) {
        // NONE
      }
    });

    Users.forEach(async (e) => {
      try {
        await this.userService.saveOne(e);
      } catch (err) {
        // NONE
      }
    });

    Products.forEach(async (e) => {
      try {
        await this.productService.saveOne(e);
      } catch (err) {
        console.log(err);
      }
    });
  }
}
