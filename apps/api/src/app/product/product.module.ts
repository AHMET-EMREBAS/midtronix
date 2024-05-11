import { Category, Department, Manufacturer, Product } from '@mdtx/database';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './product.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, Category, Department, Manufacturer]),
  ],
  controllers: [ProductController],
})
export class ProductModule {}
