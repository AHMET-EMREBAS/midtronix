import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sku, SkuView } from '@mdtx/entities';
import { SkuService } from './sku.service';
import { SkuController } from './sku.controller';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { SkuViewService } from './sku-view.service';
import { SkuViewController } from './sku-view.controller';

@Module({
  imports: [EventEmitterModule, TypeOrmModule.forFeature([Sku, SkuView])],
  controllers: [SkuController, SkuViewController],
  providers: [SkuService, SkuViewService],
  exports: [SkuService, SkuViewService],
})
export class SkuModule implements OnModuleInit {
  async onModuleInit() {
    // TODO:
  }
}
