import { CustomerEmailEntities } from '@mdtx/database';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEmailController } from './customer-email.controller';
import { CustomerEmailService } from './customer-email.service';

@Module({
  imports: [TypeOrmModule.forFeature([...CustomerEmailEntities])],
  controllers: [CustomerEmailController],
  providers: [CustomerEmailService],
})
export class CustomerEmailModule {}
