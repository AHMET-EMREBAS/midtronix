import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Modules from '@mdtx/services';
import {
  CustomerSubscriber,
  ProductSubscriber,
  PurchaseSubscriber,
  SaleSubscriber,
  SkuSubscriber,
} from '@mdtx/database';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
const modules = Object.values(Modules).filter((e) => e.name.endsWith('Module'));

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'public'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'posinitial1',
      username: 'postgres',
      password: 'password',
      autoLoadEntities: true,
      subscribers: [
        CustomerSubscriber,
        ProductSubscriber,
        SkuSubscriber,
        PurchaseSubscriber,
        SaleSubscriber,
      ],
    }),
    ...modules,
  ],
})
export class AppModule {}
