import { SkuViewEntities } from '@mdtx/database';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SkuViewController } from './sku-view.controller';
import { SkuViewService } from './sku-view.service';

@Module({
  imports: [TypeOrmModule.forFeature([...SkuViewEntities])],
  controllers: [SkuViewController],
  providers: [SkuViewService],
})
export class SkuViewModule {}
