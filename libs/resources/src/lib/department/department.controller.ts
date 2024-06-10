import { CreateBasicController, RestRouteBuilder } from '@mdtx/core';
import {
  Department,
  CreateDepartmentDto,
  UdpateDepartmentDto,
  DepartmentQueryDto,
} from '@mdtx/entities';
import { DepartmentService } from './department.service';

import { ApiVersion } from '@mdtx/common';

export const DepartmentRRB = RestRouteBuilder.get(
  Department.name,
  ApiVersion.v1
);

@DepartmentRRB.Controler()
export class DepartmentController extends CreateBasicController<
  Department,
  CreateDepartmentDto,
  UdpateDepartmentDto,
  DepartmentQueryDto
>(
  DepartmentRRB,
  Department,
  CreateDepartmentDto,
  UdpateDepartmentDto,
  DepartmentQueryDto
) {
  constructor(service: DepartmentService) {
    super(service);
  }
}
