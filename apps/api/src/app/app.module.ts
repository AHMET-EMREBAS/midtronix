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
} from '@mdtx/resources';
import { EventEmitter2, EventEmitterModule } from '@nestjs/event-emitter';
import { AppEventService } from './app-event.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '@mdtx/auth';
import { MockUserService } from './mock-user.service';
import { AppController } from './app.controller';
import {
  Categories,
  Departments,
  Manufacturers,
  PriceLevels,
  Stores,
  Suppliers,
} from './seed';

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
      type: 'postgres',
      database: 'testdb',
      username: 'postgres',
      password: 'password',
      // type: 'better-sqlite3',
      // database: 'tmp/database/dev.sqlite',
      autoLoadEntities: true,
      synchronize: true,
      dropSchema: true,
      logger: 'debug',
      logging: isDevMode(true, false),
    }),
    AuthModule.configure(MockUserService),
    SampleModule,
    CategoryModule,
    DepartmentModule,
    SupplierModule,
    StoreModule,
    PriceLevelModule,
    ProductModule,
    ManufacturerModule,
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
    protected readonly manufacturerService: ManufacturerService
  ) {}

  async onModuleInit() {
    Categories.forEach((e) => {
      try {
        this.categoryService.saveOne(e);
      } catch (err) {
        // NONE
      }
    });
    Departments.forEach((e) => {
      try {
        this.departmentService.saveOne(e);
      } catch (err) {
        // NONE
      }
    });

    PriceLevels.forEach((e) => {
      try {
        this.priceLevelService.saveOne(e);
      } catch (err) {
        // NONE
      }
    });

    Manufacturers.forEach((e) => {
      try {
        this.manufacturerService.saveOne(e);
      } catch (err) {
        // NONE
      }
    });

    Suppliers.forEach((e) => {
      try {
        this.supplierService.saveOne(e);
      } catch (err) {
        // NONE
      }
    });

    Stores.forEach((e) => {
      try {
        this.storeService.saveOne(e);
      } catch (err) {
        // NONE
      }
    });

    // let i = 1;
    // setTimeout(async () => {
    //   await this.service.saveOne({ name: 'sample 1' });
    // }, i++ * 1000);
    // setTimeout(async () => {
    //   await this.service.saveOne({ name: 'sample 2' });
    // }, i++ * 1000);
    // setTimeout(async () => {
    //   await this.service.saveOne({ name: 'sample 3' });
    // }, i++ * 1000);
    // setTimeout(async () => {
    //   await this.service.saveOne({ name: 'sample 4' });
    // }, i++ * 1000);
    // setTimeout(async () => {
    //   await this.service.saveOne({ name: 'other 5' });
    // }, i++ * 1000);
    // setTimeout(async () => {
    //   await this.service.saveOne({ name: 'other 6' });
    // }, i++ * 1000);
    // setTimeout(async () => {
    //   await this.service.saveOne({ name: 'other 7' });
    // }, i++ * 1000);
  }
}
