import { NotFoundException, PaginatorDto, RestRouteBuilder } from '@mdtx/core';
import { SkuViewService } from './sku-view.service';
import {
  QuerySkuViewDto,
  SearchSkuViewDto,
  SelectSkuViewDto,
} from '@mdtx/database';

const R = RestRouteBuilder.get('SkuView');

@R.Controler()
export class SkuViewController {
  constructor(protected readonly service: SkuViewService) {}

  @R.Metadata()
  metadata() {
    return this.service.metadata();
  }

  @R.FindOne()
  async findOne(@R.Query() query: QuerySkuViewDto) {
    const found = await this.service.findOne({ where: query });
    if (!found) throw new NotFoundException(`Item not found by the query!`);
    return found;
  }

  @R.FindAll()
  findAll(
    @R.Query() paginator: PaginatorDto,
    @R.Query() querySkuViewDto: QuerySkuViewDto,
    @R.Query() selectQueryDto: SelectSkuViewDto,
    @R.Query() searchDto: SearchSkuViewDto
  ) {
    return this.service.findAll(
      paginator,
      querySkuViewDto,
      selectQueryDto.select,
      searchDto.search
    );
  }

  @R.Count()
  async count(@R.Query() query: QuerySkuViewDto) {
    return this.service.count(query);
  }

  @R.FindOneById()
  findOneById(@R.ParamID() id: number) {
    return this.service.findOneById(id);
  }
}
