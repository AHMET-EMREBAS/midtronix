import { CreateBasicController, RestRouteBuilder } from '@mdtx/core';
import {
  Permission,
  CreatePermissionDto,
  UdpatePermissionDto,
  PermissionQueryDto,
} from '@mdtx/entities';
import { PermissionService } from './permission.service';

import { ApiVersion } from '@mdtx/common';

export const PermissionRRB = RestRouteBuilder.get(
  Permission.name,
  ApiVersion.v1
);

@PermissionRRB.Controler()
export class PermissionController extends CreateBasicController<
  Permission,
  CreatePermissionDto,
  UdpatePermissionDto,
  PermissionQueryDto
>(
  PermissionRRB,
  Permission,
  CreatePermissionDto,
  UdpatePermissionDto,
  PermissionQueryDto
) {
  constructor(service: PermissionService) {
    super(service);
  }
}
