import {
  UnsetRelationDto,
  PaginatorDto,
  RestRouteBuilder,
  RelationDto,
} from '@mdtx/core';
import {
  CreateCustomerEmailDto,
  CustomerEmail,
  UpdateCustomerEmailDto,
} from '@mdtx/database';
import { CustomerEmailService } from './customer-email.service';

const R = RestRouteBuilder.get('CustomerEmail');

@R.Controler()
export class CustomerEmailController {
  constructor(protected readonly service: CustomerEmailService) {}

  @R.Metadata()
  metadata() {
    return this.service.metadata();
  }

  @R.SaveOne()
  save(@R.Body() body: CreateCustomerEmailDto) {
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
    @R.Body() body: UpdateCustomerEmailDto
  ) {
    return this.service.updateOneById(id, body);
  }

  @R.AddRelation()
  addRelationToCustomerEmail(@R.Param() param: RelationDto<CustomerEmail>) {
    return this.service.addRelation(param);
  }

  @R.RemoveRelation()
  removeRelation(@R.Param() param: RelationDto<CustomerEmail>) {
    return this.service.removeRelation(param);
  }

  @R.SetRelation()
  setRelation(@R.Param() param: RelationDto<CustomerEmail>) {
    return this.service.setRelation(param);
  }

  @R.UnsetRelation()
  unsetRelation(@R.Param() param: UnsetRelationDto<CustomerEmail>) {
    return this.service.unsetRelation(param);
  }
}
