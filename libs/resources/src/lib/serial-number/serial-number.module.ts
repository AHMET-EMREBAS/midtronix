import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SerialNumber, SerialNumberView } from '@mdtx/entities';
import { SerialNumberService } from './serial-number.service';
import { SerialNumberController } from './serial-number.controller';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { SerialNumberViewService } from './serial-number-view.service';
import { SerialNumberViewController } from './serial-number-view.controller';

@Module({
  imports: [
    EventEmitterModule,
    TypeOrmModule.forFeature([SerialNumber, SerialNumberView]),
  ],
  controllers: [SerialNumberController, SerialNumberViewController],
  providers: [SerialNumberService, SerialNumberViewService],
  exports: [SerialNumberService, SerialNumberViewService],
})
export class SerialNumberModule implements OnModuleInit {
  async onModuleInit() {
    // TODO:
  }
}
