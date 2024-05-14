import {
  UnsetRelationDto,
  PaginatorDto,
  RestRouteBuilder,
  RelationDto,
} from '@mdtx/core';
import {
  CreateCustomerAddressDto,
  CustomerAddress,
  UpdateCustomerAddressDto,
} from '@mdtx/database';
import { CustomerAddressService } from './customer-address.service';

const R = RestRouteBuilder.get('CustomerAddress');

@R.Controler()
export class CustomerAddressController {
  constructor(protected readonly service: CustomerAddressService) {}

  @R.Metadata()
  metadata() {
    return this.service.metadata();
  }

  @R.SaveOne()
  save(@R.Body() body: CreateCustomerAddressDto) {
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
    @R.Body() body: UpdateCustomerAddressDto
  ) {
    return this.service.updateOneById(id, body);
  }

  @R.AddRelation()
  addRelationToCustomerAddress(@R.Param() param: RelationDto<CustomerAddress>) {
    return this.service.addRelation(param);
  }

  @R.RemoveRelation()
  removeRelation(@R.Param() param: RelationDto<CustomerAddress>) {
    return this.service.removeRelation(param);
  }

  @R.SetRelation()
  setRelation(@R.Param() param: RelationDto<CustomerAddress>) {
    return this.service.setRelation(param);
  }

  @R.UnsetRelation()
  unsetRelation(@R.Param() param: UnsetRelationDto<CustomerAddress>) {
    return this.service.unsetRelation(param);
  }
}
