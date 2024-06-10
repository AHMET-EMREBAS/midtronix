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
  brand(): PropertyMetadata<IProductView> {
    return {
      name: 'brand',
      label: 'Brand',
    };
  }

  upc(): PropertyMetadata<IProductView> {
    return {
      name: 'upc',
      label: 'Upc',
    };
  }

  price(): PropertyMetadata<IProductView> {
    return {
      name: 'price',
      label: 'Price',
    };
  }

  cost(): PropertyMetadata<IProductView> {
    return {
      name: 'cost',
      label: 'Cost',
    };
  }

  quantity(): PropertyMetadata<IProductView> {
    return {
      name: 'quantity',
      label: 'Quantity',
    };
  }

  supplier(): PropertyMetadata<IProductView> {
    return {
      name: 'supplier',
      label: 'Supplier',
    };
  }
  category(): PropertyMetadata<IProductView> {
    return {
      name: 'category',
      label: 'Category',
    };
  }

  productId(): PropertyMetadata<IProductView> {
    return { name: 'productId', label: 'Product Id', suffixIcon: 'numbers' };
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
