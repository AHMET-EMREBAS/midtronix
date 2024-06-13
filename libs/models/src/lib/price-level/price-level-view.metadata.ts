import {
  EntityMetadata,
  PropertyMetadata,
  BaseViewMetadata,
  TableFields,
  KeyOf,
} from '@mdtx/common';
import { IPriceLevelView } from './price-level-view';

export class PriceLevelViewMetadata
  extends BaseViewMetadata<IPriceLevelView>
  implements EntityMetadata<IPriceLevelView>
{
  taxrate(): PropertyMetadata<IPriceLevelView> {
    return {
      name: 'taxrate',
      label: 'Taxrate',
      order: 202,
    };
  }

  priceLevelId(): PropertyMetadata<IPriceLevelView> {
    return {
      name: 'priceLevelId',
      label: 'PriceLevel Id',
      order: 200,
    };
  }

  override propertyNames(): KeyOf<IPriceLevelView>[] {
    return [
      this.name().name,
      this.description().name,
      this.priceLevelId().name,
      ...super.propertyNames(),
    ];
  }

  override columns(): PropertyMetadata<IPriceLevelView>[] {
    return [
      this.name(),
      this.description(),
      this.priceLevelId(),
      ...super.columns(),
    ];
  }
}
