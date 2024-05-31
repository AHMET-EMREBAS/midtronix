import {
  UnsetRelationDto,
  PaginatorDto,
  RestRouteBuilder,
  RelationDto,
} from '@mdtx/core';
import { CreateQuantityDto, Quantity, UpdateQuantityDto } from '@mdtx/database';
import { QuantityService } from './quantity.service';

const R = RestRouteBuilder.get('Quantity');

@R.Controler()
export class QuantityController {
  constructor(protected readonly service: QuantityService) {}

  @R.Metadata()
  metadata() {
    return this.service.metadata();
  }

  @R.SaveOne()
  save(@R.Body() body: CreateQuantityDto) {
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
  updateOneById(@R.ParamID() id: number, @R.Body() body: UpdateQuantityDto) {
    console.log(id, body);
    return this.service.updateOneById(id, body);
  }

  @R.AddRelation()
  addRelationToQuantity(@R.Param() param: RelationDto<Quantity>) {
    return this.service.addRelation(param);
  }

  @R.RemoveRelation()
  removeRelation(@R.Param() param: RelationDto<Quantity>) {
    return this.service.removeRelation(param);
  }

  @R.SetRelation()
  setRelation(@R.Param() param: RelationDto<Quantity>) {
    return this.service.setRelation(param);
  }

  @R.UnsetRelation()
  unsetRelation(@R.Param() param: UnsetRelationDto<Quantity>) {
    return this.service.unsetRelation(param);
  }
}
