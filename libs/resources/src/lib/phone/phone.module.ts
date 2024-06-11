import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Phone, PhoneView } from '@mdtx/entities';
import { PhoneService } from './phone.service';
import { PhoneController } from './phone.controller';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { PhoneViewService } from './phone-view.service';
import { PhoneViewController } from './phone-view.controller';

@Module({
  imports: [EventEmitterModule, TypeOrmModule.forFeature([Phone, PhoneView])],
  controllers: [PhoneController, PhoneViewController],
  providers: [PhoneService, PhoneViewService],
  exports: [PhoneService, PhoneViewService],
})
export class PhoneModule implements OnModuleInit {
  async onModuleInit() {
    // TODO:
  }
}
