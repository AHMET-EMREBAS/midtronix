import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department, DepartmentView } from '@mdtx/entities';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { DepartmentViewService } from './department-view.service';
import { DepartmentViewController } from './department-view.controller';

@Module({
  imports: [
    EventEmitterModule,
    TypeOrmModule.forFeature([Department, DepartmentView]),
  ],
  controllers: [DepartmentController, DepartmentViewController],
  providers: [DepartmentService, DepartmentViewService],
  exports: [DepartmentService, DepartmentViewService],
})
export class DepartmentModule implements OnModuleInit {
  async onModuleInit() {
    // TODO:
  }
}
