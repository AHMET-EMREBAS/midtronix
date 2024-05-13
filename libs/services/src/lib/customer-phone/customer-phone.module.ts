import { CustomerPhoneEntities } from '@mdtx/database';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerPhoneController } from './customer-phone.controller';
import { CustomerPhoneService } from './customer-phone.service';

@Module({
  imports: [TypeOrmModule.forFeature([...CustomerPhoneEntities])],
  controllers: [CustomerPhoneController],
  providers: [CustomerPhoneService],
})
export class CustomerPhoneModule {}
