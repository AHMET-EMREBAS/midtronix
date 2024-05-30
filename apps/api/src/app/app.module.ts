import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Modules from '@mdtx/services';
import {
  CustomerSubscriber,
  OrderSubscriber,
  ProductSubscriber,
  PurchaseSubscriber,
  SaleSubscriber,
  SkuSubscriber,
} from '@mdtx/database';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppSeedModule } from './app-seed.module';
const modules = Object.values(Modules).filter((e) => e.name.endsWith('Module'));

const isDev = process.env.NODE_ENV == 'development';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'public'),
      renderPath: isDev ? 'client-app' : '',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'testdb',
      username: 'postgres',
      password: 'password',
      autoLoadEntities: true,
      subscribers: [
        CustomerSubscriber,
        ProductSubscriber,
        SkuSubscriber,
        PurchaseSubscriber,
        SaleSubscriber,
        OrderSubscriber,
      ],
      synchronize: true,
      dropSchema: true,
    }),
    ...modules,
    AppSeedModule,
  ],
})
export class AppModule {}
