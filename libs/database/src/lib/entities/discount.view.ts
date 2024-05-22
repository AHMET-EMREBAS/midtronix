import { ViewEntity, ViewColumn } from '@mdtx/core';
import { Discount } from './discount';

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('main.id', 'id')
      .addSelect('main.name', 'name')
      .addSelect('main.description', 'description')
      .addSelect('main.fixed', 'fixed')
      .addSelect('main.percent', 'percent')
      .addSelect('ds.skuId', 'skuId')
      .addSelect('main.startDate', 'startDate')
      .addSelect('main.endDate', 'endDate')
      .from(Discount, 'main')
      .leftJoin('discount_skus_sku', 'ds', 'ds.discountId = main.id')
      .where('main.endDate > CURRENT_DATE');
  },
})
export class DiscountView {
  @ViewColumn() id!: number;
  @ViewColumn() skuId!: number;
  @ViewColumn() name!: string;
  @ViewColumn() description!: string;
  @ViewColumn() startDate!: Date;
  @ViewColumn() endDate!: Date;
  @ViewColumn() fixed!: number;
  @ViewColumn() percent!: number;
}
