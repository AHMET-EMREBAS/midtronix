import { PaginatorDto, RestRouteBuilder } from '@mdtx/core';
import { OrderViewService } from './order-view.service';

const R = RestRouteBuilder.get('OrderView');

@R.Controler()
export class OrderViewController {
  constructor(protected readonly service: OrderViewService) {}

  @R.Metadata()
  metadata() {
    return this.service.metadata();
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
}
