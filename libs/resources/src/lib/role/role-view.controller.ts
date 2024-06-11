import { CreateBasicViewController, RestRouteBuilder } from '@mdtx/core';
import { RoleQueryDto, RoleView } from '@mdtx/entities';
import { RoleViewService } from './role-view.service';
import { ApiVersion } from '@mdtx/common';

export const RoleViewRRB = RestRouteBuilder.get(RoleView.name, ApiVersion.v1);

@RoleViewRRB.Controler()
export class RoleViewController extends CreateBasicViewController<
  RoleView,
  RoleQueryDto
>(RoleViewRRB, RoleView, RoleQueryDto) {
  constructor(service: RoleViewService) {
    super(service);
  }
}
