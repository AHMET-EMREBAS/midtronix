import {
  EntityMetadata,
  PropertyMetadata,
  BaseEntityMetadata,
  KeyOf,
} from '@mdtx/common';
import { IManufacturer } from './manufacturer';

export class ManufacturerMetadata
  extends BaseEntityMetadata<IManufacturer>
  implements EntityMetadata<IManufacturer>
{
  override propertyNames(): KeyOf<IManufacturer>[] {
    return [
      this.name().name,
      this.description().name,
      ...super.propertyNames(),
    ];
  }

  override columns(): PropertyMetadata<IManufacturer>[] {
    return [this.name(), this.description(), ...super.columns()];
  }

  protected override formFields() {
    return [this.name(), this.description(), ...super.formFields()];
  }
}
