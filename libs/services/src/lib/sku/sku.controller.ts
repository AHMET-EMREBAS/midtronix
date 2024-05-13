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
  constructor(protected readonly skuService: SkuService) {}

  @R.SaveOne()
  save(@R.Body() sku: CreateSkuDto) {
    return this.skuService.save(sku);
  }

  @R.FindAll()
  findAll(@R.Query() paginator: PaginatorDto) {
    return this.skuService.findAll({ ...paginator });
  }

  @R.FindOneById()
  findOneById(@R.ParamID() id: number) {
    return this.skuService.findOneById(id);
  }

  @R.DeleteOne()
  deleteById(@R.ParamID() id: number) {
    return this.skuService.deleteById(id);
  }

  @R.UpdateOne()
  updateOneById(@R.ParamID() id: number, @R.Body() body: UpdateSkuDto) {
    return this.skuService.updateOneById(id, body);
  }

  @R.AddRelation()
  addRelationToSku(@R.Param() relationDto: RelationDto<Sku>) {
    return this.skuService.addRelation(relationDto);
  }

  @R.RemoveRelation()
  removeRelation(@R.Param() relationDto: RelationDto<Sku>) {
    return this.skuService.removeRelation(relationDto);
  }

  @R.SetRelation()
  setRelation(@R.Param() relationDto: RelationDto<Sku>) {
    return this.skuService.setRelation(relationDto);
  }

  @R.UnsetRelation()
  unsetRelation(@R.Param() relationDto: UnsetRelationDto<Sku>) {
    return this.skuService.unsetRelation(relationDto);
  }
}
