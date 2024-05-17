import { CustomerRoleEntities } from '@mdtx/database';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerRoleController } from './customer-role.controller';
import { CustomerRoleService } from './customer-role.service';

@Module({
  imports: [TypeOrmModule.forFeature([...CustomerRoleEntities])],
  controllers: [CustomerRoleController],
  providers: [CustomerRoleService],
})
export class CustomerRoleModule {}
