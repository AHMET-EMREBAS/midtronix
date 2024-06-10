import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Store, StoreView } from '@mdtx/entities';
import { StoreService } from './store.service';
import { StoreController } from './store.controller';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { StoreViewService } from './store-view.service';
import { StoreViewController } from './store-view.controller';

@Module({
  imports: [EventEmitterModule, TypeOrmModule.forFeature([Store, StoreView])],
  controllers: [StoreController, StoreViewController],
  providers: [StoreService, StoreViewService],
  exports: [StoreService, StoreViewService],
})
export class StoreModule implements OnModuleInit {
  async onModuleInit() {
    // TODO:
  }
}
