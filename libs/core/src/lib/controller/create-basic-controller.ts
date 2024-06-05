import { IID } from '@mdtx/common';
import { BasicController } from './basic.controller';
import { Type } from '@nestjs/common';
import { RelationDto, UnsetRelationDto } from '../entity';
import { RestRouteBuilder } from '../rest';
import { DeepPartial } from 'typeorm';
import { BaseGeneralQuery } from '../dto';
import { AuthDto } from '../auth';

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
    @RRB.FindAll(queryDto)
    override findAll(
      @RRB.Query(queryDto) query: Q,
      @RRB.AuthParam() authDto: AuthDto
    ) {
      return super.findAll(query, authDto);
    }

    @RRB.FindOneById()
    override findOneById(
      @RRB.ParamID() id: number,
      @RRB.AuthParam() authDto: AuthDto
    ) {
      return super.findOneById(id, authDto);
    }

    @RRB.SaveOne(createDto)
    override saveOne(
      @RRB.Body(createDto) entity: C,
      @RRB.AuthParam() authDto: AuthDto
    ) {
      return super.saveOne(entity, authDto);
    }

    @RRB.UpdateOne(udpateDto)
    override updateOne(
      @RRB.ParamID() id: number,
      @RRB.Body(udpateDto) entity: U,
      @RRB.AuthParam() authDto: AuthDto
    ) {
      return super.updateOne(id, entity, authDto);
    }

    @RRB.DeleteOne()
    override deleteOneById(
      @RRB.ParamID() id: number,
      @RRB.AuthParam() authDto: AuthDto
    ) {
      return super.deleteOneById(id, authDto);
    }

    @RRB.AddRelation()
    override addRelation(
      @RRB.Body() relationDto: RelationDto,
      @RRB.AuthParam() authDto: AuthDto
    ) {
      return super.addRelation(relationDto, authDto);
    }

    @RRB.SetRelation()
    override setRelation(
      @RRB.Body() relationDto: RelationDto,
      @RRB.AuthParam() authDto: AuthDto
    ) {
      return super.setRelation(relationDto, authDto);
    }

    @RRB.UnsetRelation()
    override unsetRelation(
      @RRB.Body() relationDto: UnsetRelationDto,
      @RRB.AuthParam() authDto: AuthDto
    ) {
      return super.unsetRelation(relationDto, authDto);
    }
  }

  return DynamicController;
}
