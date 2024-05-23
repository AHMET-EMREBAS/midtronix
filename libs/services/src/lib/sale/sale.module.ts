import { SaleEntities } from '@mdtx/database';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleController } from './sale.controller';
import { SaleService } from './sale.service';

@Module({
  imports: [TypeOrmModule.forFeature([...SaleEntities])],
  controllers: [SaleController],
  providers: [SaleService],
})
export class SaleModule {}
