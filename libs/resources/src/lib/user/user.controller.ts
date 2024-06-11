import { CreateBasicController, RestRouteBuilder } from '@mdtx/core';
import {
  User,
  CreateUserDto,
  UdpateUserDto,
  UserQueryDto,
} from '@mdtx/entities';
import { UserService } from './user.service';

import { ApiVersion } from '@mdtx/common';

export const UserRRB = RestRouteBuilder.get(User.name, ApiVersion.v1);

@UserRRB.Controler()
export class UserController extends CreateBasicController<
  User,
  CreateUserDto,
  UdpateUserDto,
  UserQueryDto
>(UserRRB, User, CreateUserDto, UdpateUserDto, UserQueryDto) {
  constructor(service: UserService) {
    super(service);
  }
}
