import { PaginatorDto, RestRouteBuilder } from '@mdtx/core';
import { OrderViewService } from './order-view.service';
import { QueryOrderViewDto } from '@mdtx/database';

const R = RestRouteBuilder.get('OrderView');

@R.Controler()
export class OrderViewController {
  constructor(protected readonly service: OrderViewService) {}

  @R.Metadata()
  metadata() {
    return this.service.metadata();
  }

  @R.FindAll()
  findAll(
    @R.Query() paginator: PaginatorDto,
    @R.Query() query: QueryOrderViewDto
  ) {
    return this.service.findAll({ ...paginator }, query);
  }

  @R.FindOneById()
  findOneById(@R.ParamID() id: number) {
    return this.service.findOneById(id);
  }

  @R.DeleteOne()
  deleteById(@R.ParamID() id: number) {
    return this.service.deleteById(id);
  }
}
