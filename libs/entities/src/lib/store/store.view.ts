import { BaseView, ViewColumn, ViewEntity } from '@mdtx/core';
import { IStoreView } from '@mdtx/models';

import { Store } from './store.entity';

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('ROW_NUMBER() OVER ()', 'id')
      .addSelect('main.id', 'storeId')
      .addSelect('main.name', 'name')
      .addSelect('main.notes', 'notes')
      .addSelect('main.createdAt', 'createdAt')
      .addSelect('main.updatedAt', 'updatedAt')
      .addSelect('main.deletedAt', 'deletedAt')
      .addSelect('main.active', 'active')
      .addSelect('main.createdBy', 'createdBy')
      .addSelect('main.updatedBy', 'updatedBy')
      .from(Store, 'main');
  },
})
export class StoreView extends BaseView implements IStoreView {
  @ViewColumn() name!: string;
  @ViewColumn() storeId!: string;
}