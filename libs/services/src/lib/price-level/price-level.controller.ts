import {
  UnsetRelationDto,
  PaginatorDto,
  RestRouteBuilder,
  RelationDto,
} from '@mdtx/core';
import {
  CreatePriceLevelDto,
  PriceLevel,
  UpdatePriceLevelDto,
} from '@mdtx/database';
import { PriceLevelService } from './price-level.service';

const R = RestRouteBuilder.get('PriceLevel');

@R.Controler()
export class PriceLevelController {
  constructor(protected readonly service: PriceLevelService) {}

  @R.Metadata()
  metadata() {
    return this.service.metadata();
  }

  @R.SaveOne()
  save(@R.Body() body: CreatePriceLevelDto) {
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
  updateOneById(@R.ParamID() id: number, @R.Body() body: UpdatePriceLevelDto) {
    return this.service.updateOneById(id, body);
  }

  @R.AddRelation()
  addRelationToPriceLevel(@R.Param() param: RelationDto<PriceLevel>) {
    return this.service.addRelation(param);
  }

  @R.RemoveRelation()
  removeRelation(@R.Param() param: RelationDto<PriceLevel>) {
    return this.service.removeRelation(param);
  }

  @R.SetRelation()
  setRelation(@R.Param() param: RelationDto<PriceLevel>) {
    return this.service.setRelation(param);
  }

  @R.UnsetRelation()
  unsetRelation(@R.Param() param: UnsetRelationDto<PriceLevel>) {
    return this.service.unsetRelation(param);
  }
}
