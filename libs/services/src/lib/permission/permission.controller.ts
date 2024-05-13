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
  constructor(protected readonly permissionService: PermissionService) {}

  @R.SaveOne()
  save(@R.Body() permission: CreatePermissionDto) {
    return this.permissionService.save(permission);
  }

  @R.FindAll()
  findAll(@R.Query() paginator: PaginatorDto) {
    return this.permissionService.findAll({ ...paginator });
  }

  @R.FindOneById()
  findOneById(@R.ParamID() id: number) {
    return this.permissionService.findOneById(id);
  }

  @R.DeleteOne()
  deleteById(@R.ParamID() id: number) {
    return this.permissionService.deleteById(id);
  }

  @R.UpdateOne()
  updateOneById(@R.ParamID() id: number, @R.Body() body: UpdatePermissionDto) {
    return this.permissionService.updateOneById(id, body);
  }

  @R.AddRelation()
  addRelationToPermission(@R.Param() relationDto: RelationDto<Permission>) {
    return this.permissionService.addRelation(relationDto);
  }

  @R.RemoveRelation()
  removeRelation(@R.Param() relationDto: RelationDto<Permission>) {
    return this.permissionService.removeRelation(relationDto);
  }

  @R.SetRelation()
  setRelation(@R.Param() relationDto: RelationDto<Permission>) {
    return this.permissionService.setRelation(relationDto);
  }

  @R.UnsetRelation()
  unsetRelation(@R.Param() relationDto: UnsetRelationDto<Permission>) {
    return this.permissionService.unsetRelation(relationDto);
  }
}
