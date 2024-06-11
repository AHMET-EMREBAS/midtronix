import { CreateBasicViewController, RestRouteBuilder } from '@mdtx/core';
import { RoleQueryDto, RoleView } from '@mdtx/entities';
import { RoleService } from './role.service';
import { ApiVersion } from '@mdtx/common';

export const RoleViewRRB = RestRouteBuilder.get(RoleView.name, ApiVersion.v1);

@RoleViewRRB.Controler()
export class RoleViewController extends CreateBasicViewController<
  RoleView,
  RoleQueryDto
>(RoleViewRRB, RoleView, RoleQueryDto) {
  constructor(service: RoleService) {
    super(service);
  }
}
