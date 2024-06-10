import { BaseView, ViewColumn, ViewEntity } from '@mdtx/core';
import { ICategoryView } from '@mdtx/models';

import { Category } from './category.entity';

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('ROW_NUMBER() OVER ()', 'id')
      .addSelect('main.id', 'categoryId')
      .addSelect('main.name', 'name')
      .addSelect('main.notes', 'notes')
      .addSelect('main.createdAt', 'createdAt')
      .addSelect('main.updatedAt', 'updatedAt')
      .addSelect('main.deletedAt', 'deletedAt')
      .addSelect('main.active', 'active')
      .addSelect('main.createdBy', 'createdBy')
      .addSelect('main.updatedBy', 'updatedBy')
      .from(Category, 'main');
  },
})
export class CategoryView extends BaseView implements ICategoryView {
  @ViewColumn() name!: string;
  @ViewColumn() categoryId!: string;
}
