import { BaseView, ViewColumn, ViewEntity, ViewNumberColumn } from '@mdtx/core';
import { IQuantityView } from '@mdtx/models';

import { Quantity } from './quantity.entity';
import { Store } from '../store';
import { Sku } from '../sku';

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('ROW_NUMBER() OVER ()', 'id')
      .addSelect('main.id', 'eid')
      .addSelect('main.quantity', 'quantity')

      .addSelect('main.storeId', 'storeId')
      .addSelect('main.skuId', 'skuId')
      .addSelect('sku.sku', 'sku')
      .addSelect('store.name', 'storeName')
      .addSelect('main.notes', 'notes')
      .addSelect('main.createdAt', 'createdAt')
      .addSelect('main.updatedAt', 'updatedAt')
      .addSelect('main.deletedAt', 'deletedAt')
      .addSelect('main.active', 'active')
      .addSelect('main.createdBy', 'createdBy')
      .addSelect('main.updatedBy', 'updatedBy')
      .from(Quantity, 'main')
      .leftJoin(Store, 'store', 'store.id = main.storeId')
      .leftJoin(Sku, 'sku', 'sku.id = main.skuId');
  },
})
export class QuantityView extends BaseView implements IQuantityView {
  @ViewNumberColumn() eid!: number;
  @ViewNumberColumn() quantity!: string;
  @ViewNumberColumn() storeId!: number;
  @ViewNumberColumn() skuId!: number;
  @ViewColumn() storeName!: string;
  @ViewColumn() sku!: string;
}
