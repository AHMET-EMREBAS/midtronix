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
    return { name: 'cost', label: 'Cost' };
  }

  price(): PropertyMetadata<IPriceView> {
    return { name: 'price', label: 'Price' };
  }

  sku(): PropertyMetadata<IPriceView> {
    return { name: 'sku', label: 'Sku' };
  }

  skuId(): PropertyMetadata<IPriceView> {
    return { name: 'skuId', label: 'Skuid' };
  }

  priceLevelId(): PropertyMetadata<IPriceView> {
    return { name: 'priceLevelId', label: 'Pricelevelid' };
  }

  skuName(): PropertyMetadata<IPriceView> {
    return { name: 'skuName', label: 'Skuname' };
  }

  priceLevelName(): PropertyMetadata<IPriceView> {
    return { name: 'priceLevelName', label: 'Pricelevelname' };
  }

  eid(): PropertyMetadata<IPriceView> {
    return {
      name: 'eid',
      label: 'Price Id',
      suffixIcon: 'numbers',
      order: 245,
    };
  }

  override propertyNames(): KeyOf<IPriceView>[] {
    return [
      this.name().name,
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
      this.name(),
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
