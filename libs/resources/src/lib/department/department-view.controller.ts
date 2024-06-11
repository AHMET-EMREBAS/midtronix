import { CreateBasicViewController, RestRouteBuilder } from '@mdtx/core';
import { DepartmentQueryDto, DepartmentView } from '@mdtx/entities';
import { DepartmentViewService } from './department-view.service';
import { ApiVersion } from '@mdtx/common';

export const DepartmentViewRRB = RestRouteBuilder.get(
  DepartmentView.name,
  ApiVersion.v1
);

@DepartmentViewRRB.Controler()
export class DepartmentViewController extends CreateBasicViewController<
  DepartmentView,
  DepartmentQueryDto
>(DepartmentViewRRB, DepartmentView, DepartmentQueryDto) {
  constructor(service: DepartmentViewService) {
    super(service);
  }
}
