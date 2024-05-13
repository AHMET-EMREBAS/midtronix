import { Permission, Role, User } from '@mdtx/database';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';

export const UserModuleEntities = [User, Role, Permission];

@Module({
  imports: [TypeOrmModule.forFeature(UserModuleEntities)],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
