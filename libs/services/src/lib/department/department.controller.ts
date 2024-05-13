import {
  UnsetRelationDto,
  PaginatorDto,
  RestRouteBuilder,
  RelationDto,
} from '@mdtx/core';
import {
  CreateDepartmentDto,
  Department,
  UpdateDepartmentDto,
} from '@mdtx/database';
import { DepartmentService } from './department.service';

const R = RestRouteBuilder.get('Department');

@R.Controler()
export class DepartmentController {
  constructor(protected readonly departmentService: DepartmentService) {}

  @R.SaveOne()
  save(@R.Body() department: CreateDepartmentDto) {
    return this.departmentService.save(department);
  }

  @R.FindAll()
  findAll(@R.Query() paginator: PaginatorDto) {
    return this.departmentService.findAll({ ...paginator });
  }

  @R.FindOneById()
  findOneById(@R.ParamID() id: number) {
    return this.departmentService.findOneById(id);
  }

  @R.DeleteOne()
  deleteById(@R.ParamID() id: number) {
    return this.departmentService.deleteById(id);
  }

  @R.UpdateOne()
  updateOneById(@R.ParamID() id: number, @R.Body() body: UpdateDepartmentDto) {
    return this.departmentService.updateOneById(id, body);
  }

  @R.AddRelation()
  addRelationToDepartment(@R.Param() relationDto: RelationDto<Department>) {
    return this.departmentService.addRelation(relationDto);
  }

  @R.RemoveRelation()
  removeRelation(@R.Param() relationDto: RelationDto<Department>) {
    return this.departmentService.removeRelation(relationDto);
  }

  @R.SetRelation()
  setRelation(@R.Param() relationDto: RelationDto<Department>) {
    return this.departmentService.setRelation(relationDto);
  }

  @R.UnsetRelation()
  unsetRelation(@R.Param() relationDto: UnsetRelationDto<Department>) {
    return this.departmentService.unsetRelation(relationDto);
  }
}
