import { BaseView, ViewColumn, ViewEntity, ViewNumberColumn } from '@mdtx/core';
import { ISkuView } from '@mdtx/models';

import { Sku } from './sku.entity';
import { Product } from '../product';

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('ROW_NUMBER() OVER ()', 'id')
      .addSelect('main.id', 'eid')
      .addSelect('main.name', 'name')
      .addSelect('main.description', 'description')
      .addSelect('main.notes', 'notes')
      .addSelect('product.id', 'productId')
      .addSelect('product.name', 'productName')
      .addSelect('product.upc', 'productUpc')
      .addSelect('main.createdAt', 'createdAt')
      .addSelect('main.updatedAt', 'updatedAt')
      .addSelect('main.deletedAt', 'deletedAt')
      .addSelect('main.active', 'active')
      .addSelect('main.createdBy', 'createdBy')
      .addSelect('main.updatedBy', 'updatedBy')
      .from(Sku, 'main')
      .leftJoin(Product, 'product', 'product.id = main.productId');
  },
})
export class SkuView extends BaseView implements ISkuView {
  @ViewNumberColumn() productId!: number;
  @ViewColumn() productName!: string;
  @ViewColumn() productUpc!: string;
  @ViewColumn() name!: string;
  @ViewNumberColumn() eid!: number;
  @ViewColumn() description!: string;
  @ViewColumn() sku!: string;
}
