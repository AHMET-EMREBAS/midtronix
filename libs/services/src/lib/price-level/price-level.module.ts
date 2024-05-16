import { PriceLevelEntities } from '@mdtx/database';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriceLevelController } from './price-level.controller';
import { PriceLevelService } from './price-level.service';

@Module({
  imports: [TypeOrmModule.forFeature([...PriceLevelEntities])],
  controllers: [PriceLevelController],
  providers: [PriceLevelService],
})
export class PriceLevelModule {}
