import { AllPropertyType, IID } from '@mdtx/common';
import { Type } from '@nestjs/common';
import { RestRouteBuilder } from '../rest';
import { BasePaginatorQueryDto } from '../dto';
import { AuthDto } from '../auth';
import { BasicViewController } from './basic-view.controller';

export function CreateBasicViewController<
  T extends AllPropertyType<IID, any>,
  Q extends BasePaginatorQueryDto
>(
  RRB: RestRouteBuilder,
  entity: Type<T>,
  queryDto: Type<Q>
): Type<BasicViewController<T, Q>> {
  @RRB.Controler()
  class DynamicController extends BasicViewController<T, Q> {
    @RRB.Count(queryDto)
    override count(query: Q, authDto: AuthDto) {
      return super.count(query, authDto);
    }

    @RRB.FindAll(queryDto, entity)
    override findAll(
      @RRB.Query(queryDto) query: Q,
      @RRB.AuthParam() authDto: AuthDto
    ) {
      return super.findAll(query, authDto);
    }

    @RRB.FindOneById(entity)
    override findOneById(
      @RRB.ParamID() id: number,
      @RRB.AuthParam() authDto: AuthDto
    ) {
      return super.findOneById(id, authDto);
    }
  }

  return DynamicController;
}
