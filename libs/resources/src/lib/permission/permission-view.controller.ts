import { CreateBasicViewController, RestRouteBuilder } from '@mdtx/core';
import { PermissionQueryDto, PermissionView } from '@mdtx/entities';
import { PermissionViewService } from './permission-view.service';
import { ApiVersion } from '@mdtx/common';

export const PermissionViewRRB = RestRouteBuilder.get(
  PermissionView.name,
  ApiVersion.v1
);

@PermissionViewRRB.Controler()
export class PermissionViewController extends CreateBasicViewController<
  PermissionView,
  PermissionQueryDto
>(PermissionViewRRB, PermissionView, PermissionQueryDto) {
  constructor(service: PermissionViewService) {
    super(service);
  }
}
