import {
  UnsetRelationDto,
  PaginatorDto,
  RestRouteBuilder,
  RelationDto,
} from '@mdtx/core';
import { CreateCustomerDto, Customer, UpdateCustomerDto } from '@mdtx/database';
import { CustomerService } from './customer.service';

const R = RestRouteBuilder.get('Customer');

@R.Controler()
export class CustomerController {
  constructor(protected readonly service: CustomerService) {}

  @R.Metadata()
  metadata() {
    return this.service.metadata();
  }

  @R.SaveOne()
  save(@R.Body() body: CreateCustomerDto) {
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
  updateOneById(@R.ParamID() id: number, @R.Body() body: UpdateCustomerDto) {
    return this.service.updateOneById(id, body);
  }

  @R.AddRelation()
  addRelationToCustomer(@R.Param() param: RelationDto<Customer>) {
    return this.service.addRelation(param);
  }

  @R.RemoveRelation()
  removeRelation(@R.Param() param: RelationDto<Customer>) {
    return this.service.removeRelation(param);
  }

  @R.SetRelation()
  setRelation(@R.Param() param: RelationDto<Customer>) {
    return this.service.setRelation(param);
  }

  @R.UnsetRelation()
  unsetRelation(@R.Param() param: UnsetRelationDto<Customer>) {
    return this.service.unsetRelation(param);
  }
}
