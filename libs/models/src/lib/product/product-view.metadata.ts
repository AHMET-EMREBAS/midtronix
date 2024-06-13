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

  productId(): PropertyMetadata<IProductView> {
    return {
      name: 'productId',
      label: 'Product Id',
      suffixIcon: 'numbers',
      order: 201,
    };
  }

  override propertyNames(): KeyOf<IProductView>[] {
    return [
      this.productId().name,
      this.name().name,
      this.upc().name,
      this.brand().name,
      this.category().name,
      this.supplier().name,
      this.cost().name,
      this.price().name,
      this.quantity().name,
      this.description().name,
      ...super.propertyNames(),
    ];
  }

  override columns(): PropertyMetadata<IProductView>[] {
    return [
      this.productId(),
      this.name(),
      this.upc(),
      this.brand(),
      this.category(),
      this.supplier(),
      this.cost(),
      this.price(),
      this.quantity(),
      this.description(),
      ...super.columns(),
    ];
  }
}
