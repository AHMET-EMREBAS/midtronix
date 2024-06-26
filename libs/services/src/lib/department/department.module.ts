import { DepartmentEntities } from '@mdtx/database';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentController } from './department.controller';
import { DepartmentService } from './department.service';

@Module({
  imports: [TypeOrmModule.forFeature([...DepartmentEntities])],
  controllers: [DepartmentController],
  providers: [DepartmentService],
})
export class DepartmentModule {}
