import { ProductImageEntities } from '@mdtx/database';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductImageController } from './product-image.controller';
import { ProductImageService } from './product-image.service';

@Module({
  imports: [TypeOrmModule.forFeature([...ProductImageEntities])],
  controllers: [ProductImageController],
  providers: [ProductImageService],
})
export class ProductImageModule {}
