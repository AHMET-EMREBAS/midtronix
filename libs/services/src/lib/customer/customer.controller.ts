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
  constructor(protected readonly customerService: CustomerService) {}

  @R.SaveOne()
  save(@R.Body() customer: CreateCustomerDto) {
    return this.customerService.save(customer);
  }

  @R.FindAll()
  findAll(@R.Query() paginator: PaginatorDto) {
    return this.customerService.findAll({ ...paginator });
  }

  @R.FindOneById()
  findOneById(@R.ParamID() id: number) {
    return this.customerService.findOneById(id);
  }

  @R.DeleteOne()
  deleteById(@R.ParamID() id: number) {
    return this.customerService.deleteById(id);
  }

  @R.UpdateOne()
  updateOneById(@R.ParamID() id: number, @R.Body() body: UpdateCustomerDto) {
    return this.customerService.updateOneById(id, body);
  }

  @R.AddRelation()
  addRelationToCustomer(@R.Param() relationDto: RelationDto<Customer>) {
    return this.customerService.addRelation(relationDto);
  }

  @R.RemoveRelation()
  removeRelation(@R.Param() relationDto: RelationDto<Customer>) {
    return this.customerService.removeRelation(relationDto);
  }

  @R.SetRelation()
  setRelation(@R.Param() relationDto: RelationDto<Customer>) {
    return this.customerService.setRelation(relationDto);
  }

  @R.UnsetRelation()
  unsetRelation(@R.Param() relationDto: UnsetRelationDto<Customer>) {
    return this.customerService.unsetRelation(relationDto);
  }
}
