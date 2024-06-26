import { RoleEntities } from '@mdtx/database';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';

@Module({
  imports: [TypeOrmModule.forFeature([...RoleEntities])],
  controllers: [RoleController],
  providers: [RoleService],
})
export class RoleModule {}
