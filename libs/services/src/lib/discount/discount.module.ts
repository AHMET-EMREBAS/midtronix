import { DiscountEntities } from '@mdtx/database';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiscountController } from './discount.controller';
import { DiscountService } from './discount.service';

@Module({
  imports: [TypeOrmModule.forFeature([...DiscountEntities])],
  controllers: [DiscountController],
  providers: [DiscountService],
})
export class DiscountModule {}
