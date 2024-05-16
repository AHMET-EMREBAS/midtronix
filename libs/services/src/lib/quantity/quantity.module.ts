import { QuantityEntities } from '@mdtx/database';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuantityController } from './quantity.controller';
import { QuantityService } from './quantity.service';

@Module({
  imports: [TypeOrmModule.forFeature([...QuantityEntities])],
  controllers: [QuantityController],
  providers: [QuantityService],
})
export class QuantityModule {}
