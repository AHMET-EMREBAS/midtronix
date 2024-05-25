import { DiscountViewEntities } from '@mdtx/database';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiscountViewController } from './discount-view.controller';
import { DiscountViewService } from './discount-view.service';

@Module({
  imports: [TypeOrmModule.forFeature([...DiscountViewEntities])],
  controllers: [DiscountViewController],
  providers: [DiscountViewService],
})
export class DiscountViewModule {}
