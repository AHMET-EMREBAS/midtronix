import { PermissionEntities } from '@mdtx/database';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionController } from './permission.controller';
import { PermissionService } from './permission.service';

@Module({
  imports: [TypeOrmModule.forFeature([...PermissionEntities])],
  controllers: [PermissionController],
  providers: [PermissionService],
})
export class PermissionModule {}
