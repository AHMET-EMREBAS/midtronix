import { ProductEntities } from '@mdtx/database';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [TypeOrmModule.forFeature([...ProductEntities])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
