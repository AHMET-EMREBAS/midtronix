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
  name(): PropertyMetadata<IPriceLevel> {
    return {
      name: 'name',
      label: 'Name',
      type: 'string',
      inputType: 'text',
      required: true,
      minlength: 3,
      maxlength: 50,
      order: 201,
    };
  }
  override propertyNames(): KeyOf<IPriceLevel>[] {
    return [this.name().name, ...super.propertyNames()];
  }

  override columns(): PropertyMetadata<IPriceLevel>[] {
    return [this.name(), ...super.columns()];
  }

  protected override formFields() {
    return [this.name(), ...super.formFields()];
  }
}
