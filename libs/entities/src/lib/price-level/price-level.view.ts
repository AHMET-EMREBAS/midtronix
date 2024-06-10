import { BaseView, ViewColumn, ViewEntity } from '@mdtx/core';
import { IPriceLevelView } from '@mdtx/models';

import { PriceLevel } from './price-level.entity';

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('ROW_NUMBER() OVER ()', 'id')
      .addSelect('main.id', 'priceLevelId')
      .addSelect('main.name', 'name')
      .addSelect('main.notes', 'notes')
      .addSelect('main.createdAt', 'createdAt')
      .addSelect('main.updatedAt', 'updatedAt')
      .addSelect('main.deletedAt', 'deletedAt')
      .addSelect('main.active', 'active')
      .addSelect('main.createdBy', 'createdBy')
      .addSelect('main.updatedBy', 'updatedBy')
      .from(PriceLevel, 'main');
  },
})
export class PriceLevelView extends BaseView implements IPriceLevelView {
  @ViewColumn() name!: string;
  @ViewColumn() priceLevelId!: string;
  @ViewColumn() description!: string;
  @ViewColumn() taxrate!: string;
}
