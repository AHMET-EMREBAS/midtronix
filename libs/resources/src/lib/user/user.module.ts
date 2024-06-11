import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User, UserView } from '@mdtx/entities';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { UserViewService } from './user-view.service';
import { UserViewController } from './user-view.controller';

@Module({
  imports: [EventEmitterModule, TypeOrmModule.forFeature([User, UserView])],
  controllers: [UserController, UserViewController],
  providers: [UserService, UserViewService],
  exports: [UserService, UserViewService],
})
export class UserModule {}
