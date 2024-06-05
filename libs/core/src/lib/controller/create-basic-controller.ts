import { IBaseQueryDto, IID } from '@mdtx/common';
import { BasicController } from './basic.controller';
import { Type } from '@nestjs/common';
import { DeepPartial } from 'typeorm';
import { BaseEntityService, RelationDto, UnsetRelationDto } from '../entity';
import { RestRouteBuilder } from '../rest';

export function CreateBasicController<
  T extends IID = IID,
  C extends DeepPartial<T> = DeepPartial<T>,
  U extends DeepPartial<T> = DeepPartial<T>,
  Q extends IBaseQueryDto = IBaseQueryDto
>(
  resourceName: string,
  createDto: C,
  udpateDto: U,
  queryDto: Q
): Type<BasicController<T, C, U, Q>> {
  const R = RestRouteBuilder.get(resourceName);

  @R.Controler()
  class DynamicController extends BasicController<T, C, U, Q> {
    constructor(service: BaseEntityService<T, C, U, Q>) {
      super(service);
    }

    @R.FindAll(queryDto)
    override findAll(@R.Query() query: Q) {
      return this.service.findAll(query);
    }

    @R.FindOneById()
    override findOneById(@R.ParamID() id: number) {
      return this.service.findOneById(id);
    }

    @R.SaveOne(createDto)
    override saveOne(@R.Body() entity: C) {
      return this.service.saveOne(entity);
    }

    @R.UpdateOne(udpateDto)
    override updateOne(@R.ParamID() id: number, @R.Body() entity: U) {
      return this.service.updateOne(id, entity);
    }

    @R.DeleteOne()
    override deleteOne(@R.ParamID() id: number) {
      return this.service.deleteOneById(id);
    }

    @R.AddRelation()
    override addRelation(@R.Body() relationDto: RelationDto) {
      return this.service.addRelation(relationDto);
    }

    @R.SetRelation()
    override setRelation(@R.Body() relationDto: RelationDto) {
      return this.service.setRelation(relationDto);
    }

    @R.UnsetRelation()
    override unsetRelation(@R.Body() relationDto: UnsetRelationDto) {
      return this.service.unsetRelation(relationDto);
    }
  }

  return DynamicController;
}
