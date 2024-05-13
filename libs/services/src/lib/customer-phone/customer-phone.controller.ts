import {
  UnsetRelationDto,
  PaginatorDto,
  RestRouteBuilder,
  RelationDto,
} from '@mdtx/core';
import {
  CreateCustomerPhoneDto,
  CustomerPhone,
  UpdateCustomerPhoneDto,
} from '@mdtx/database';
import { CustomerPhoneService } from './customer-phone.service';

const R = RestRouteBuilder.get('CustomerPhone');

@R.Controler()
export class CustomerPhoneController {
  constructor(protected readonly service: CustomerPhoneService) {}

  @R.SaveOne()
  save(@R.Body() body: CreateCustomerPhoneDto) {
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
    @R.Body() body: UpdateCustomerPhoneDto
  ) {
    return this.service.updateOneById(id, body);
  }

  @R.AddRelation()
  addRelationToCustomerPhone(@R.Param() param: RelationDto<CustomerPhone>) {
    return this.service.addRelation(param);
  }

  @R.RemoveRelation()
  removeRelation(@R.Param() param: RelationDto<CustomerPhone>) {
    return this.service.removeRelation(param);
  }

  @R.SetRelation()
  setRelation(@R.Param() param: RelationDto<CustomerPhone>) {
    return this.service.setRelation(param);
  }

  @R.UnsetRelation()
  unsetRelation(@R.Param() param: UnsetRelationDto<CustomerPhone>) {
    return this.service.unsetRelation(param);
  }
}
