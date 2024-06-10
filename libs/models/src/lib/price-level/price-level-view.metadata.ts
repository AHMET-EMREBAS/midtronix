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
    };
  }
  priceLevelId(): PropertyMetadata<IPriceLevelView> {
    return {
      name: 'priceLevelId',
      label: 'PriceLevel Id',
    };
  }

  override tableColumnNames(): TableFields<IPriceLevelView> {
    return ['name', ...super.tableColumnNames()];
  }

  override propertyNames(): KeyOf<IPriceLevelView>[] {
    return [
      this.name().name,
      this.priceLevelId().name,
      ...super.propertyNames(),
    ];
  }

  override columns(): PropertyMetadata<IPriceLevelView>[] {
    return [this.name(), this.priceLevelId(), ...super.columns()];
  }
}
