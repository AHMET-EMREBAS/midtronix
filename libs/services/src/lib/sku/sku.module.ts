import { SkuEntities } from '@mdtx/database';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SkuController } from './sku.controller';
import { SkuService } from './sku.service';

@Module({
  imports: [TypeOrmModule.forFeature([...SkuEntities])],
  controllers: [SkuController],
  providers: [SkuService],
})
export class SkuModule {}
