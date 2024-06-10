import {
  EntityMetadata,
  PropertyMetadata,
  BaseViewMetadata,
  TableFields,
  KeyOf,
} from '@mdtx/common';
import { IProductView } from './product-view';

export class ProductViewMetadata
  extends BaseViewMetadata<IProductView>
  implements EntityMetadata<IProductView>
{
  productId(): PropertyMetadata<IProductView> {
    return { name: 'productId', label: 'Product Id', suffixIcon: 'numbers' };
  }
  name(): PropertyMetadata<IProductView> {
    return {
      name: 'name',
      label: 'Product Name',
      suffixIcon: 'info',
    };
  }

  override tableColumnNames(): TableFields<IProductView> {
    return ['name', ...super.tableColumnNames()];
  }

  override propertyNames(): KeyOf<IProductView>[] {
    return [this.name().name, this.productId().name, ...super.propertyNames()];
  }

  override columns(): PropertyMetadata<IProductView>[] {
    return [this.name(), this.productId(), ...super.columns()];
  }
}
