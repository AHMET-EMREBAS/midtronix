import {
  EntityMetadata,
  PropertyMetadata,
  BaseViewMetadata,
  KeyOf,
} from '@mdtx/common';
import { ISkuView } from './sku-view';

export class SkuViewMetadata
  extends BaseViewMetadata<ISkuView>
  implements EntityMetadata<ISkuView>
{
  productId(): PropertyMetadata<ISkuView> {
    return {
      name: 'productId',
      label: 'Product Id',
      type: 'string',
      order: 201,
    };
  }

  productName(): PropertyMetadata<ISkuView> {
    return {
      name: 'productName',
      label: 'Product Name',
      type: 'string',
      order: 202,
    };
  }

  productUpc(): PropertyMetadata<ISkuView> {
    return {
      name: 'productUpc',
      label: 'UPC',
      type: 'string',
      order: 203,
    };
  }

  sku(): PropertyMetadata<ISkuView> {
    return {
      name: 'sku',
      label: 'SKU',
      type: 'string',
      order: 200,
    };
  }

  eid(): PropertyMetadata<ISkuView> {
    return { name: 'eid', label: 'Sku Id', suffixIcon: 'numbers', order: 199 };
  }

  override propertyNames(): KeyOf<ISkuView>[] {
    return [
      this.name().name,
      this.description().name,
      this.sku().name,
      this.eid().name,
      this.productId().name,
      this.productName().name,
      this.productUpc().name,
      ...super.propertyNames(),
    ];
  }

  override columns(): PropertyMetadata<ISkuView>[] {
    return [
      this.name(),
      this.description(),
      this.eid(),
      this.productId(),
      this.sku(),
      this.productName(),
      this.productUpc(),
      ...super.columns(),
    ];
  }
}
