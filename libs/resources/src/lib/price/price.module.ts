import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Price, PriceView } from '@mdtx/entities';
import { PriceService } from './price.service';
import { PriceController } from './price.controller';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { PriceViewService } from './price-view.service';
import { PriceViewController } from './price-view.controller';

@Module({
  imports: [EventEmitterModule, TypeOrmModule.forFeature([Price, PriceView])],
  controllers: [PriceController, PriceViewController],
  providers: [PriceService, PriceViewService],
  exports: [PriceService, PriceViewService],
})
export class PriceModule implements OnModuleInit {
  async onModuleInit() {
    // TODO:
  }
}
