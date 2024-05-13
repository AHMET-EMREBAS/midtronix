import {
  UnsetRelationDto,
  PaginatorDto,
  RestRouteBuilder,
  RelationDto,
} from '@mdtx/core';
import {
  CreatePermissionDto,
  Permission,
  UpdatePermissionDto,
} from '@mdtx/database';
import { PermissionService } from './permission.service';

const R = RestRouteBuilder.get('Permission');

@R.Controler()
export class PermissionController {
  constructor(protected readonly service: PermissionService) {}

  @R.SaveOne()
  save(@R.Body() body: CreatePermissionDto) {
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
  updateOneById(@R.ParamID() id: number, @R.Body() body: UpdatePermissionDto) {
    return this.service.updateOneById(id, body);
  }

  @R.AddRelation()
  addRelationToPermission(@R.Param() param: RelationDto<Permission>) {
    return this.service.addRelation(param);
  }

  @R.RemoveRelation()
  removeRelation(@R.Param() param: RelationDto<Permission>) {
    return this.service.removeRelation(param);
  }

  @R.SetRelation()
  setRelation(@R.Param() param: RelationDto<Permission>) {
    return this.service.setRelation(param);
  }

  @R.UnsetRelation()
  unsetRelation(@R.Param() param: UnsetRelationDto<Permission>) {
    return this.service.unsetRelation(param);
  }
}
