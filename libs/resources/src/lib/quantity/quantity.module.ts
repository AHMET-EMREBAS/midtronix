import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quantity, QuantityView } from '@mdtx/entities';
import { QuantityService } from './quantity.service';
import { QuantityController } from './quantity.controller';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { QuantityViewService } from './quantity-view.service';
import { QuantityViewController } from './quantity-view.controller';

@Module({
  imports: [
    EventEmitterModule,
    TypeOrmModule.forFeature([Quantity, QuantityView]),
  ],
  controllers: [QuantityController, QuantityViewController],
  providers: [QuantityService, QuantityViewService],
  exports: [QuantityService, QuantityViewService],
})
export class QuantityModule implements OnModuleInit {
  async onModuleInit() {
    // TODO:
  }
}
