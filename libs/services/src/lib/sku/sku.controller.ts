import {
  UnsetRelationDto,
  PaginatorDto,
  RestRouteBuilder,
  RelationDto,
} from '@mdtx/core';
import { CreateSkuDto, Sku, UpdateSkuDto } from '@mdtx/database';
import { SkuService } from './sku.service';

const R = RestRouteBuilder.get('Sku');

@R.Controler()
export class SkuController {
  constructor(protected readonly service: SkuService) {}

  @R.SaveOne()
  save(@R.Body() body: CreateSkuDto) {
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
  updateOneById(@R.ParamID() id: number, @R.Body() body: UpdateSkuDto) {
    return this.service.updateOneById(id, body);
  }

  @R.AddRelation()
  addRelationToSku(@R.Param() param: RelationDto<Sku>) {
    return this.service.addRelation(param);
  }

  @R.RemoveRelation()
  removeRelation(@R.Param() param: RelationDto<Sku>) {
    return this.service.removeRelation(param);
  }

  @R.SetRelation()
  setRelation(@R.Param() param: RelationDto<Sku>) {
    return this.service.setRelation(param);
  }

  @R.UnsetRelation()
  unsetRelation(@R.Param() param: UnsetRelationDto<Sku>) {
    return this.service.unsetRelation(param);
  }
}
