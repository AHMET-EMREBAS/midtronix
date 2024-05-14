import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Modules from '@mdtx/services';
import { AppSeedModule } from './app-seed.module';

const modules = Object.values(Modules).filter((e) => e.name.endsWith('Module'));

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'testdb',
      username: 'postgres',
      password: 'password',
      autoLoadEntities: true,
      synchronize: true,
      dropSchema: true,
    }),
    ...modules,
    AppSeedModule,
  ],
})
export class AppModule {}
