import { NotFoundException, PaginatorDto, RestRouteBuilder } from '@mdtx/core';
import { SkuViewService } from './sku-view.service';
import { QueryPosItemDto } from '@mdtx/database';

const R = RestRouteBuilder.get('SkuView');

@R.Controler()
export class SkuViewController {
  constructor(protected readonly service: SkuViewService) {}

  @R.Metadata()
  metadata() {
    return this.service.metadata();
  }

  @R.FindOne()
  async findOne(@R.Query() query: QueryPosItemDto) {
    const found = await this.service.findOne({ where: query });

    if (!found) {
      console.log(query);
      throw new NotFoundException(`Item not found by the query!`);
    }

    return found;
  }

  @R.FindAll()
  findAll(@R.Query() paginator: PaginatorDto) {
    return this.service.findAll({ ...paginator,  });
  }

  @R.FindOneById()
  findOneById(@R.ParamID() id: number) {
    return this.service.findOneById(id);
  }
}
