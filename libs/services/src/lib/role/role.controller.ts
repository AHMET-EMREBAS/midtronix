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
  constructor(protected readonly service: RoleService) {}

  @R.SaveOne()
  save(@R.Body() body: CreateRoleDto) {
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
  updateOneById(@R.ParamID() id: number, @R.Body() body: UpdateRoleDto) {
    return this.service.updateOneById(id, body);
  }

  @R.AddRelation()
  addRelationToRole(@R.Param() param: RelationDto<Role>) {
    return this.service.addRelation(param);
  }

  @R.RemoveRelation()
  removeRelation(@R.Param() param: RelationDto<Role>) {
    return this.service.removeRelation(param);
  }

  @R.SetRelation()
  setRelation(@R.Param() param: RelationDto<Role>) {
    return this.service.setRelation(param);
  }

  @R.UnsetRelation()
  unsetRelation(@R.Param() param: UnsetRelationDto<Role>) {
    return this.service.unsetRelation(param);
  }
}
