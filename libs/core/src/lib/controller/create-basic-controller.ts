import { IID } from '@mdtx/common';
import { BasicController } from './basic.controller';
import { Type } from '@nestjs/common';
import { BaseEntityService, RelationDto, UnsetRelationDto } from '../entity';
import { RestRouteBuilder } from '../rest';
import { DeepPartial } from 'typeorm';
import { BaseGeneralQuery } from '../dto';

export function CreateBasicController<
  T extends IID,
  C extends DeepPartial<T>,
  U extends DeepPartial<T>,
  Q extends BaseGeneralQuery
>(
  RRB: RestRouteBuilder,
  createDto: Type<C>,
  udpateDto: Type<U>,
  queryDto: Type<Q>
): Type<BasicController<T, C, U, Q>> {
  @RRB.Controler()
  class DynamicController extends BasicController<T, C, U, Q> {
    constructor(service: BaseEntityService<T>) {
      super(service);
    }

    @RRB.FindAll(queryDto)
    override findAll(@RRB.Query() query: Q) {
      return this.service.findAll(query);
    }

    @RRB.FindOneById()
    override findOneById(@RRB.ParamID() id: number) {
      return this.service.findOneById(id);
    }

    @RRB.SaveOne(createDto)
    override saveOne(@RRB.Body() entity: C) {
      return this.service.saveOne(entity);
    }

    @RRB.UpdateOne(udpateDto)
    override updateOne(@RRB.ParamID() id: number, @RRB.Body() entity: U) {
      return this.service.updateOne(id, entity);
    }

    @RRB.DeleteOne()
    override deleteOne(@RRB.ParamID() id: number) {
      return this.service.deleteOneById(id);
    }

    @RRB.AddRelation()
    override addRelation(@RRB.Body() relationDto: RelationDto) {
      return this.service.addRelation(relationDto);
    }

    @RRB.SetRelation()
    override setRelation(@RRB.Body() relationDto: RelationDto) {
      return this.service.setRelation(relationDto);
    }

    @RRB.UnsetRelation()
    override unsetRelation(@RRB.Body() relationDto: UnsetRelationDto) {
      return this.service.unsetRelation(relationDto);
    }
  }

  return DynamicController;
}
