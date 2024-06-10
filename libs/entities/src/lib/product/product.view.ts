import { BaseView, ViewColumn, ViewEntity } from '@mdtx/core';
import { IProductView } from '@mdtx/models';

import { Product } from './product.entity';
import { Category } from '../category';
import { Supplier } from '../supplier';

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
      .addSelect('main.description', 'description')
      .addSelect('main.brand', 'brand')
      .addSelect('main.upc', 'upc')
      .addSelect('main.price', 'price')
      .addSelect('main.cost', 'cost')
      .addSelect('main.quantity', 'quantity')
      .addSelect('supplier.name', 'supplier')
      .addSelect('category.name', 'category')
      .addSelect('main.active', 'active')
      .addSelect('main.createdBy', 'createdBy')
      .addSelect('main.updatedBy', 'updatedBy')
      .from(Product, 'main')
      .leftJoin(Category, 'category', 'category.id = main.categoryId')
      .leftJoin(Supplier, 'supplier', 'supplier.id = main.supplierId');
  },
})
export class ProductView extends BaseView implements IProductView {
  @ViewColumn() name!: string;
  @ViewColumn() description!: string;
  @ViewColumn() brand!: string;
  @ViewColumn() upc!: string;
  @ViewColumn() price!: string;
  @ViewColumn() cost!: string;
  @ViewColumn() quantity!: string;
  @ViewColumn() supplier!: string;
  @ViewColumn() category!: string;
  @ViewColumn() productId!: string;
}
