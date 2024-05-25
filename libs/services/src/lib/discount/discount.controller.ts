import {
  UnsetRelationDto,
  PaginatorDto,
  RestRouteBuilder,
  RelationDto,
} from '@mdtx/core';
import {
  CreateDiscountDto,
  Discount,
  QueryDiscountDto,
  UpdateDiscountDto,
} from '@mdtx/database';
import { DiscountService } from './discount.service';

const R = RestRouteBuilder.get('Discount');

@R.Controler()
export class DiscountController {
  constructor(protected readonly service: DiscountService) {}

  @R.Metadata()
  metadata() {
    return this.service.metadata();
  }

  @R.SaveOne()
  save(@R.Body() body: CreateDiscountDto) {
    return this.service.save(body);
  }

  @R.FindAll()
  findAll(
    @R.Query() paginator: PaginatorDto,
  ) {
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
  updateOneById(@R.ParamID() id: number, @R.Body() body: UpdateDiscountDto) {
    return this.service.updateOneById(id, body);
  }

  @R.AddRelation()
  addRelationToDiscount(@R.Param() param: RelationDto<Discount>) {
    return this.service.addRelation(param);
  }

  @R.RemoveRelation()
  removeRelation(@R.Param() param: RelationDto<Discount>) {
    return this.service.removeRelation(param);
  }

  @R.SetRelation()
  setRelation(@R.Param() param: RelationDto<Discount>) {
    return this.service.setRelation(param);
  }

  @R.UnsetRelation()
  unsetRelation(@R.Param() param: UnsetRelationDto<Discount>) {
    return this.service.unsetRelation(param);
  }
}
