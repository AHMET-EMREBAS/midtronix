import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriceLevel, PriceLevelView } from '@mdtx/entities';
import { PriceLevelService } from './price-level.service';
import { PriceLevelController } from './price-level.controller';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { PriceLevelViewService } from './price-level-view.service';
import { PriceLevelViewController } from './price-level-view.controller';

@Module({
  imports: [
    EventEmitterModule,
    TypeOrmModule.forFeature([PriceLevel, PriceLevelView]),
  ],
  controllers: [PriceLevelController, PriceLevelViewController],
  providers: [PriceLevelService, PriceLevelViewService],
  exports: [PriceLevelService, PriceLevelViewService],
})
export class PriceLevelModule implements OnModuleInit {
  async onModuleInit() {
    // TODO:
  }
}
