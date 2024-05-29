import {
  UnsetRelationDto,
  PaginatorDto,
  RestRouteBuilder,
  RelationDto,
} from '@mdtx/core';
import { CreatePurchaseDto, Purchase, UpdatePurchaseDto } from '@mdtx/database';
import { PurchaseService } from './purchase.service';

const R = RestRouteBuilder.get('Purchase');

@R.Controler()
export class PurchaseController {
  constructor(protected readonly service: PurchaseService) {}

  @R.Metadata()
  metadata() {
    return this.service.metadata();
  }

  @R.SaveOne()
  save(@R.Body() body: CreatePurchaseDto) {
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
  updateOneById(@R.ParamID() id: number, @R.Body() body: UpdatePurchaseDto) {
    return this.service.updateOneById(id, body);
  }

  @R.AddRelation()
  addRelationToPurchase(@R.Param() param: RelationDto<Purchase>) {
    return this.service.addRelation(param);
  }

  @R.RemoveRelation()
  removeRelation(@R.Param() param: RelationDto<Purchase>) {
    return this.service.removeRelation(param);
  }

  @R.SetRelation()
  setRelation(@R.Param() param: RelationDto<Purchase>) {
    return this.service.setRelation(param);
  }

  @R.UnsetRelation()
  unsetRelation(@R.Param() param: UnsetRelationDto<Purchase>) {
    return this.service.unsetRelation(param);
  }
}
