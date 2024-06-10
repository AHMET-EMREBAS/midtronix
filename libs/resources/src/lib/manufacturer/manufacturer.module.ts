import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Manufacturer, ManufacturerView } from '@mdtx/entities';
import { ManufacturerService } from './manufacturer.service';
import { ManufacturerController } from './manufacturer.controller';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ManufacturerViewService } from './manufacturer-view.service';
import { ManufacturerViewController } from './manufacturer-view.controller';

@Module({
  imports: [
    EventEmitterModule,
    TypeOrmModule.forFeature([Manufacturer, ManufacturerView]),
  ],
  controllers: [ManufacturerController, ManufacturerViewController],
  providers: [ManufacturerService, ManufacturerViewService],
  exports: [ManufacturerService, ManufacturerViewService],
})
export class ManufacturerModule implements OnModuleInit {
  async onModuleInit() {
    // TODO:
  }
}
