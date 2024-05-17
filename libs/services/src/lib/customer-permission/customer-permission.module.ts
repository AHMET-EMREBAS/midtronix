import { CustomerPermissionEntities } from '@mdtx/database';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerPermissionController } from './customer-permission.controller';
import { CustomerPermissionService } from './customer-permission.service';

@Module({
  imports: [TypeOrmModule.forFeature([...CustomerPermissionEntities])],
  controllers: [CustomerPermissionController],
  providers: [CustomerPermissionService],
})
export class CustomerPermissionModule {}
