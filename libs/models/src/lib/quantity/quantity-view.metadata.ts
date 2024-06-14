import {
  EntityMetadata,
  PropertyMetadata,
  BaseViewMetadata,
  KeyOf,
} from '@mdtx/common';
import { IQuantityView } from './quantity-view';

export class QuantityViewMetadata
  extends BaseViewMetadata<IQuantityView>
  implements EntityMetadata<IQuantityView>
{
  eid(): PropertyMetadata<IQuantityView> {
    return {
      name: 'eid',
      label: 'Quantity Id',
      suffixIcon: 'numbers',
      order: 201,
    };
  }

  storeId(): PropertyMetadata<IQuantityView> {
    return {
      name: 'storeId',
      label: 'Storeid',
      order: 204,
    };
  }
  storeName(): PropertyMetadata<IQuantityView> {
    return {
      name: 'storeName',
      label: 'Store Name',
      order: 205,
    };
  }
  skuId(): PropertyMetadata<IQuantityView> {
    return {
      name: 'skuId',
      label: 'Skuid',
      order: 203,
    };
  }

  sku(): PropertyMetadata<IQuantityView> {
    return {
      name: 'sku',
      label: 'Sku',
      order: 204,
    };
  }

  quantity(): PropertyMetadata<IQuantityView> {
    return {
      name: 'quantity',
      label: 'Quantity',
      order: 205,
    };
  }

  override propertyNames(): KeyOf<IQuantityView>[] {
    return [
      this.eid().name,
      this.storeId().name,
      this.storeName().name,
      this.skuId().name,
      this.sku().name,
      this.quantity().name,
      ...super.propertyNames(),
    ];
  }

  override columns(): PropertyMetadata<IQuantityView>[] {
    return [
      this.eid(),
      this.storeId(),
      this.storeName(),
      this.skuId(),
      this.sku(),
      this.quantity(),

      ...super.columns(),
    ];
  }
}
