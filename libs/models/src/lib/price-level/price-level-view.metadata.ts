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
  priceLevelId(): PropertyMetadata<IPriceLevelView> {
    return {
      name: 'priceLevelId',
      label: 'PriceLevel Id',
      suffixIcon: 'numbers',
    };
  }
  name(): PropertyMetadata<IPriceLevelView> {
    return {
      name: 'name',
      label: 'PriceLevel Name',
      suffixIcon: 'info',
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
