import {
  EntityMetadata,
  PropertyMetadata,
  BaseEntityMetadata,
  KeyOf,
} from '@mdtx/common';
import { IPriceLevel } from './price-level';

export class PriceLevelMetadata
  extends BaseEntityMetadata<IPriceLevel>
  implements EntityMetadata<IPriceLevel>
{
  taxrate(): PropertyMetadata<IPriceLevel> {
    return {
      name: 'taxrate',
      label: 'Taxrate',
      type: 'number',
      inputType: 'number',
      prefixIcon: 'money',
      min: 0,
      order: 203,
    };
  }

  override propertyNames(): KeyOf<IPriceLevel>[] {
    return [
      this.name().name,
      this.taxrate().name,
      this.description().name,
      ...super.propertyNames(),
    ];
  }

  override columns(): PropertyMetadata<IPriceLevel>[] {
    return [
      this.name(),
      this.taxrate(),
      this.description(),
      ...super.columns(),
    ];
  }

  protected override formFields() {
    return [
      this.name(),
      this.taxrate(),
      this.description(),
      ...super.formFields(),
    ];
  }
}
