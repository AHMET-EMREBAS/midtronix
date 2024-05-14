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
  constructor(protected readonly service: DepartmentService) {}

  @R.Metadata()
  metadata() {
    return this.service.metadata();
  }

  @R.SaveOne()
  save(@R.Body() body: CreateDepartmentDto) {
    return this.service.save(body);
  }

  @R.FindAll()
  findAll(@R.Query() paginator: PaginatorDto) {
    return this.service.findAll({ ...paginator });
  }

  @R.FindOneById()
  findOneById(@R.ParamID() id: number) {
    return this.service.findOneById(id);
  }

  @R.DeleteOne()
  deleteById(@R.ParamID() id: number) {
    return this.service.deleteById(id);
  }

  @R.UpdateOne()
  updateOneById(@R.ParamID() id: number, @R.Body() body: UpdateDepartmentDto) {
    return this.service.updateOneById(id, body);
  }

  @R.AddRelation()
  addRelationToDepartment(@R.Param() param: RelationDto<Department>) {
    return this.service.addRelation(param);
  }

  @R.RemoveRelation()
  removeRelation(@R.Param() param: RelationDto<Department>) {
    return this.service.removeRelation(param);
  }

  @R.SetRelation()
  setRelation(@R.Param() param: RelationDto<Department>) {
    return this.service.setRelation(param);
  }

  @R.UnsetRelation()
  unsetRelation(@R.Param() param: UnsetRelationDto<Department>) {
    return this.service.unsetRelation(param);
  }
}
