import { ViewEntity, ViewColumn } from '@mdtx/core';
import { Discount } from './discount';

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('main.id', 'id')
      .addSelect('main.name', 'name')
      .addSelect('main.fixed', 'fixed')
      .addSelect('main.percent', 'percent')
      .addSelect('main.skuId', 'skuId')
      .addSelect('main.startDate', 'startDate')
      .addSelect('main.endDate', 'endDate')
      .from(Discount, 'main')
      .where('main.endDate > CURRENT_DATE AND main.startDate <= CURRENT_DATE')
      .orderBy('id', 'ASC');
  },
})
export class DiscountView {
  @ViewColumn() id!: number;
  @ViewColumn() skuId!: number;
  @ViewColumn() name!: string;
  @ViewColumn() fixed!: number;
  @ViewColumn() percent!: number;
  @ViewColumn() startDate!: Date;
  @ViewColumn() endDate!: Date;
}
