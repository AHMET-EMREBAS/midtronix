import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role, RoleView } from '@mdtx/entities';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { RoleViewService } from './role-view.service';
import { RoleViewController } from './role-view.controller';

@Module({
  imports: [EventEmitterModule, TypeOrmModule.forFeature([Role, RoleView])],
  controllers: [RoleController, RoleViewController],
  providers: [RoleService, RoleViewService],
  exports: [RoleService, RoleViewService],
})
export class RoleModule implements OnModuleInit {
  async onModuleInit() {
    // TODO:
  }
}
