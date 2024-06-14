import { BaseView, ViewColumn, ViewEntity, ViewNumberColumn } from '@mdtx/core';
import { IPriceView } from '@mdtx/models';

import { Price } from './price.entity';
import { Sku } from '../sku';
import { PriceLevel } from '../price-level';

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('ROW_NUMBER() OVER ()', 'id')
      .addSelect('main.id', 'eid')
      .addSelect('main.price', 'price')
      .addSelect('main.cost', 'cost')

      .addSelect('main.priceLevelId', 'priceLevelId')
      .addSelect('priceLevel.name', 'priceLevelName')

      .addSelect('sku.id', 'skuId')
      .addSelect('sku.sku', 'sku')
      .addSelect('sku.name', 'skuName')

      .addSelect('main.notes', 'notes')
      .addSelect('main.createdAt', 'createdAt')
      .addSelect('main.updatedAt', 'updatedAt')
      .addSelect('main.deletedAt', 'deletedAt')
      .addSelect('main.active', 'active')
      .addSelect('main.createdBy', 'createdBy')
      .addSelect('main.updatedBy', 'updatedBy')
      .from(Price, 'main')
      .leftJoin(Sku, 'sku', 'sku.id = main.skuId')
      .leftJoin(PriceLevel, 'priceLevel', 'priceLevel.id = main.priceLevelId');
  },
})
export class PriceView extends BaseView implements IPriceView {
  @ViewNumberColumn() skuId!: number;
  @ViewNumberColumn() priceLevelId!: number;
  @ViewNumberColumn() price!: number;
  @ViewNumberColumn() cost!: number;
  @ViewColumn() sku!: string;
  @ViewColumn() skuName!: string;
  @ViewColumn() priceLevelName!: string;

  @ViewNumberColumn() eid!: number;
}
