import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product';

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
    ProductModule,
  ],
})
export class AppModule {}
