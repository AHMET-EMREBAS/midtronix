import { PurchaseEntities } from '@mdtx/database';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseController } from './purchase.controller';
import { PurchaseService } from './purchase.service';

@Module({
  imports: [TypeOrmModule.forFeature([...PurchaseEntities])],
  controllers: [PurchaseController],
  providers: [PurchaseService],
})
export class PurchaseModule {}
