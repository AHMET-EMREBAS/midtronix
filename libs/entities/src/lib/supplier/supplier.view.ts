import { BaseView, ViewColumn, ViewEntity } from '@mdtx/core';
import { ISupplierView } from '@mdtx/models';

import { Supplier } from './supplier.entity';

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('ROW_NUMBER() OVER ()', 'id')
      .addSelect('main.id', 'supplierId')
      .addSelect('main.name', 'name')
      .addSelect('main.notes', 'notes')
      .addSelect('main.createdAt', 'createdAt')
      .addSelect('main.updatedAt', 'updatedAt')
      .addSelect('main.deletedAt', 'deletedAt')
      .addSelect('main.active', 'active')
      .addSelect('main.createdBy', 'createdBy')
      .addSelect('main.updatedBy', 'updatedBy')
      .from(Supplier, 'main');
  },
})
export class SupplierView extends BaseView implements ISupplierView {
  @ViewColumn() description!: string;
  @ViewColumn() name!: string;
  @ViewColumn() supplierId!: string;
}
