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
      type: 'string',
      order: 301,
    };
  }

  productName(): PropertyMetadata<ISkuView> {
    return {
      name: 'productName',
      type: 'string',
      order: 302,
    };
  }

  productUpc(): PropertyMetadata<ISkuView> {
    return {
      name: 'productUpc',
      type: 'string',
      order: 303,
    };
  }

  sku(): PropertyMetadata<ISkuView> {
    return {
      name: 'sku',
      label: 'Sku',
      type: 'string',
      order: 201,
    };
  }

  eid(): PropertyMetadata<ISkuView> {
    return { name: 'eid', label: 'Sku Id', suffixIcon: 'numbers', order: 245 };
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
