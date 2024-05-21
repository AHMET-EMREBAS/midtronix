import { TaxrateEntities } from '@mdtx/database';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaxrateController } from './taxrate.controller';
import { TaxrateService } from './taxrate.service';

@Module({
  imports: [TypeOrmModule.forFeature([...TaxrateEntities])],
  controllers: [TaxrateController],
  providers: [TaxrateService],
})
export class TaxrateModule {}
