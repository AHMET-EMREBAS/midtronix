import {
  EntityMetadata,
  PropertyMetadata,
  BaseViewMetadata,
  TableFields,
  KeyOf,
} from '@mdtx/common';
import { ICategoryView } from './category-view';

export class CategoryViewMetadata
  extends BaseViewMetadata<ICategoryView>
  implements EntityMetadata<ICategoryView>
{
  categoryId(): PropertyMetadata<ICategoryView> {
    return { name: 'categoryId', label: 'Category Id', suffixIcon: 'numbers' };
  }
  name(): PropertyMetadata<ICategoryView> {
    return {
      name: 'name',
      label: 'Category Name',
      suffixIcon: 'info',
    };
  }

  override tableColumnNames(): TableFields<ICategoryView> {
    return ['name', ...super.tableColumnNames()];
  }

  override propertyNames(): KeyOf<ICategoryView>[] {
    return [this.name().name, this.categoryId().name, ...super.propertyNames()];
  }

  override columns(): PropertyMetadata<ICategoryView>[] {
    return [this.name(), this.categoryId(), ...super.columns()];
  }
}
