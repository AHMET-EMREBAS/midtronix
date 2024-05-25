import { PaginatorDto, RestRouteBuilder } from '@mdtx/core';
import { QueryDiscountDto } from '@mdtx/database';
import { DiscountViewService } from './discount-view.service';

const R = RestRouteBuilder.get('DiscountView');

@R.Controler()
export class DiscountViewController {
  constructor(protected readonly service: DiscountViewService) {}

  @R.FindAll()
  findAll(
    @R.Query() paginator: PaginatorDto,
    @R.Query() query: QueryDiscountDto
  ) {
    return this.service.findAll({ ...paginator }, query);
  }

  @R.FindOneById()
  findOneById(@R.ParamID() id: number) {
    return this.service.findOneById(id);
  }
}
