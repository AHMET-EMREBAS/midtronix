import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer, CustomerView } from '@mdtx/entities';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { CustomerViewService } from './customer-view.service';
import { CustomerViewController } from './customer-view.controller';

@Module({
  imports: [
    EventEmitterModule,
    TypeOrmModule.forFeature([Customer, CustomerView]),
  ],
  controllers: [CustomerController, CustomerViewController],
  providers: [CustomerService, CustomerViewService],
  exports: [CustomerService, CustomerViewService],
})
export class CustomerModule implements OnModuleInit {
  async onModuleInit() {
    // TODO:
  }
}
