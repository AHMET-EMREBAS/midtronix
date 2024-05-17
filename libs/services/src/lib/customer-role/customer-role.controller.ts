import {
  UnsetRelationDto,
  PaginatorDto,
  RestRouteBuilder,
  RelationDto,
} from '@mdtx/core';
import {
  CreateCustomerRoleDto,
  CustomerRole,
  UpdateCustomerRoleDto,
} from '@mdtx/database';
import { CustomerRoleService } from './customer-role.service';

const R = RestRouteBuilder.get('CustomerRole');

@R.Controler()
export class CustomerRoleController {
  constructor(protected readonly service: CustomerRoleService) {}

  @R.Metadata()
  metadata() {
    return this.service.metadata();
  }

  @R.SaveOne()
  save(@R.Body() body: CreateCustomerRoleDto) {
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
  updateOneById(
    @R.ParamID() id: number,
    @R.Body() body: UpdateCustomerRoleDto
  ) {
    return this.service.updateOneById(id, body);
  }

  @R.AddRelation()
  addRelationToCustomerRole(@R.Param() param: RelationDto<CustomerRole>) {
    return this.service.addRelation(param);
  }

  @R.RemoveRelation()
  removeRelation(@R.Param() param: RelationDto<CustomerRole>) {
    return this.service.removeRelation(param);
  }

  @R.SetRelation()
  setRelation(@R.Param() param: RelationDto<CustomerRole>) {
    return this.service.setRelation(param);
  }

  @R.UnsetRelation()
  unsetRelation(@R.Param() param: UnsetRelationDto<CustomerRole>) {
    return this.service.unsetRelation(param);
  }
}
