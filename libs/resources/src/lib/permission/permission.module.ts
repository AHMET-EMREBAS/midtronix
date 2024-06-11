import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permission, PermissionView } from '@mdtx/entities';
import { PermissionService } from './permission.service';
import { PermissionController } from './permission.controller';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { PermissionViewService } from './permission-view.service';
import { PermissionViewController } from './permission-view.controller';

@Module({
  imports: [
    EventEmitterModule,
    TypeOrmModule.forFeature([Permission, PermissionView]),
  ],
  controllers: [PermissionController, PermissionViewController],
  providers: [PermissionService, PermissionViewService],
  exports: [PermissionService, PermissionViewService],
})
export class PermissionModule implements OnModuleInit {
  async onModuleInit() {
    // TODO:
  }
}
