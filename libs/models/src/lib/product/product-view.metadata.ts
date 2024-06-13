import {
  EntityMetadata,
  PropertyMetadata,
  BaseViewMetadata,
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
      order: 221,
    };
  }

  upc(): PropertyMetadata<IProductView> {
    return {
      name: 'upc',
      label: 'Upc',
      order: 211,
    };
  }

  price(): PropertyMetadata<IProductView> {
    return {
      name: 'price',
      label: 'Price',
      order: 241,
    };
  }

  cost(): PropertyMetadata<IProductView> {
    return {
      name: 'cost',
      label: 'Cost',
      order: 240,
    };
  }

  quantity(): PropertyMetadata<IProductView> {
    return {
      name: 'quantity',
      label: 'Quantity',
      order: 250,
    };
  }

  supplier(): PropertyMetadata<IProductView> {
    return {
      name: 'supplier',
      label: 'Supplier',
      order: 261,
    };
  }

  category(): PropertyMetadata<IProductView> {
    return {
      name: 'category',
      label: 'Category',
      order: 260,
    };
  }

  eid(): PropertyMetadata<IProductView> {
    return {
      name: 'eid',
      label: 'id',
      suffixIcon: 'numbers',
      order: 201,
    };
  }

  serialNumberRequired(): PropertyMetadata<IProductView> {
    return {
      name: 'serialNumberRequired',
      label: 'Serial',
      order: 301,
    };
  }
  override propertyNames(): KeyOf<IProductView>[] {
    return [
      this.eid().name,
      this.name().name,
      this.upc().name,
      this.brand().name,
      this.category().name,
      this.supplier().name,
      this.cost().name,
      this.price().name,
      this.quantity().name,
      this.description().name,
      this.serialNumberRequired().name,
      ...super.propertyNames(),
    ];
  }

  override columns(): PropertyMetadata<IProductView>[] {
    return [
      this.eid(),
      this.name(),
      this.upc(),
      this.brand(),
      this.category(),
      this.supplier(),
      this.cost(),
      this.price(),
      this.quantity(),
      this.description(),
      this.serialNumberRequired(),
      ...super.columns(),
    ];
  }
}
