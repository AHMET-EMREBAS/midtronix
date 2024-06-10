import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Supplier, SupplierView } from '@mdtx/entities';
import { SupplierService } from './supplier.service';
import { SupplierController } from './supplier.controller';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { SupplierViewService } from './supplier-view.service';
import { SupplierViewController } from './supplier-view.controller';

@Module({
  imports: [
    EventEmitterModule,
    TypeOrmModule.forFeature([Supplier, SupplierView]),
  ],
  controllers: [SupplierController, SupplierViewController],
  providers: [SupplierService, SupplierViewService],
  exports: [SupplierService, SupplierViewService],
})
export class SupplierModule implements OnModuleInit {
  async onModuleInit() {
    // TODO:
  }
}
