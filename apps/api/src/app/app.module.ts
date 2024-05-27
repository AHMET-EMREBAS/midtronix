import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Modules from '@mdtx/services';
import { AppSeedModule } from './app-seed.module';
import {
  CustomerSubscriber,
  ProductSubscriber,
  SkuSubscriber,
} from '@mdtx/database';

const modules = Object.values(Modules).filter((e) => e.name.endsWith('Module'));

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // type: 'postgres',

      // database: 'testdb',
      // username: 'postgres',
      // password: 'password',

      type: 'better-sqlite3',
      database: 'tmp/database/data.sqlite',
      autoLoadEntities: true,
      subscribers: [CustomerSubscriber, ProductSubscriber, SkuSubscriber],
      synchronize: true,
      dropSchema: true,
    }),
    ...modules,
    AppSeedModule,
  ],
})
export class AppModule {}
