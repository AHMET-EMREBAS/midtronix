import { CreateBasicViewController, RestRouteBuilder } from '@mdtx/core';
import { DepartmentQueryDto, DepartmentView } from '@mdtx/entities';
import { DepartmentService } from './department.service';
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
  constructor(service: DepartmentService) {
    super(service);
  }
}
