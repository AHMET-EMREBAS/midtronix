import {
  UnsetRelationDto,
  PaginatorDto,
  RestRouteBuilder,
  RelationDto,
} from '@mdtx/core';
import { CreateRoleDto, Role, UpdateRoleDto } from '@mdtx/database';
import { RoleService } from './role.service';

const R = RestRouteBuilder.get('Role');

@R.Controler()
export class RoleController {
  constructor(protected readonly roleService: RoleService) {}

  @R.SaveOne()
  save(@R.Body() role: CreateRoleDto) {
    return this.roleService.save(role);
  }

  @R.FindAll()
  findAll(@R.Query() paginator: PaginatorDto) {
    return this.roleService.findAll({ ...paginator });
  }

  @R.FindOneById()
  findOneById(@R.ParamID() id: number) {
    return this.roleService.findOneById(id);
  }

  @R.DeleteOne()
  deleteById(@R.ParamID() id: number) {
    return this.roleService.deleteById(id);
  }

  @R.UpdateOne()
  updateOneById(@R.ParamID() id: number, @R.Body() body: UpdateRoleDto) {
    return this.roleService.updateOneById(id, body);
  }

  @R.AddRelation()
  addRelationToRole(@R.Param() relationDto: RelationDto<Role>) {
    return this.roleService.addRelation(relationDto);
  }

  @R.RemoveRelation()
  removeRelation(@R.Param() relationDto: RelationDto<Role>) {
    return this.roleService.removeRelation(relationDto);
  }

  @R.SetRelation()
  setRelation(@R.Param() relationDto: RelationDto<Role>) {
    return this.roleService.setRelation(relationDto);
  }

  @R.UnsetRelation()
  unsetRelation(@R.Param() relationDto: UnsetRelationDto<Role>) {
    return this.roleService.unsetRelation(relationDto);
  }
}
