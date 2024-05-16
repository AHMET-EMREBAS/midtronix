import { PriceEntities } from '@mdtx/database';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriceController } from './price.controller';
import { PriceService } from './price.service';

@Module({
  imports: [TypeOrmModule.forFeature([...PriceEntities])],
  controllers: [PriceController],
  providers: [PriceService],
})
export class PriceModule {}
