import { BaseView, ViewColumn, ViewEntity } from '@mdtx/core';
import { IProductView } from '@mdtx/models';

import { Product } from './product.entity';

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('ROW_NUMBER() OVER ()', 'id')
      .addSelect('main.id', 'productId')
      .addSelect('main.name', 'name')
      .addSelect('main.notes', 'notes')
      .addSelect('main.createdAt', 'createdAt')
      .addSelect('main.updatedAt', 'updatedAt')
      .addSelect('main.deletedAt', 'deletedAt')
      .addSelect('main.active', 'active')
      .addSelect('main.createdBy', 'createdBy')
      .addSelect('main.updatedBy', 'updatedBy')
      .from(Product, 'main');
  },
})
export class ProductView extends BaseView implements IProductView {
  @ViewColumn() name!: string;
  @ViewColumn() productId!: string;
}
