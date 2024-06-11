import { CreateBasicController, RestRouteBuilder } from '@mdtx/core';
import {
  Role,
  CreateRoleDto,
  UdpateRoleDto,
  RoleQueryDto,
} from '@mdtx/entities';
import { RoleService } from './role.service';

import { ApiVersion } from '@mdtx/common';

export const RoleRRB = RestRouteBuilder.get(Role.name, ApiVersion.v1);

@RoleRRB.Controler()
export class RoleController extends CreateBasicController<
  Role,
  CreateRoleDto,
  UdpateRoleDto,
  RoleQueryDto
>(RoleRRB, Role, CreateRoleDto, UdpateRoleDto, RoleQueryDto) {
  constructor(service: RoleService) {
    super(service);
  }
}
