import {
  EntityMetadata,
  PropertyMetadata,
  BaseViewMetadata,
  KeyOf,
} from '@mdtx/common';
import { IPriceView } from './price-view';

export class PriceViewMetadata
  extends BaseViewMetadata<IPriceView>
  implements EntityMetadata<IPriceView>
{
  cost(): PropertyMetadata<IPriceView> {
    return { name: 'cost', label: 'Cost', order: 211 };
  }

  price(): PropertyMetadata<IPriceView> {
    return { name: 'price', label: 'Price', order: 212 };
  }

  skuId(): PropertyMetadata<IPriceView> {
    return { name: 'skuId', label: 'Skuid', order: 203 };
  }

  sku(): PropertyMetadata<IPriceView> {
    return { name: 'sku', label: 'Sku', order: 204 };
  }

  skuName(): PropertyMetadata<IPriceView> {
    return { name: 'skuName', label: 'Skuname', order: 205 };
  }

  priceLevelId(): PropertyMetadata<IPriceView> {
    return { name: 'priceLevelId', label: 'Pricelevelid', order: 207 };
  }

  priceLevelName(): PropertyMetadata<IPriceView> {
    return { name: 'priceLevelName', label: 'Pricelevelname', order: 208 };
  }

  eid(): PropertyMetadata<IPriceView> {
    return {
      name: 'eid',
      label: 'Price Id',
      suffixIcon: 'numbers',
      order: 200,
    };
  }

  override propertyNames(): KeyOf<IPriceView>[] {
    return [
      this.eid().name,
      this.cost().name,
      this.price().name,
      this.sku().name,
      this.skuId().name,
      this.priceLevelId().name,
      this.skuName().name,
      this.priceLevelName().name,
      ...super.propertyNames(),
    ];
  }

  override columns(): PropertyMetadata<IPriceView>[] {
    return [
      this.eid(),
      this.cost(),
      this.price(),
      this.sku(),
      this.skuId(),
      this.priceLevelId(),
      this.skuName(),
      this.priceLevelName(),
      ...super.columns(),
    ];
  }
}
