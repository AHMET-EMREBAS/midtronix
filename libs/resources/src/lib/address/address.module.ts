import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address, AddressView } from '@mdtx/entities';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AddressViewService } from './address-view.service';
import { AddressViewController } from './address-view.controller';

@Module({
  imports: [
    EventEmitterModule,
    TypeOrmModule.forFeature([Address, AddressView]),
  ],
  controllers: [AddressController, AddressViewController],
  providers: [AddressService, AddressViewService],
  exports: [AddressService, AddressViewService],
})
export class AddressModule implements OnModuleInit {
  async onModuleInit() {
    // TODO:
  }
}
