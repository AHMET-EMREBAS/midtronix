import {
  EntityMetadata,
  PropertyMetadata,
  BaseViewMetadata,
  KeyOf,
} from '@mdtx/common';
import { IManufacturerView } from './manufacturer-view';

export class ManufacturerViewMetadata
  extends BaseViewMetadata<IManufacturerView>
  implements EntityMetadata<IManufacturerView>
{
  manufacturerId(): PropertyMetadata<IManufacturerView> {
    return {
      name: 'manufacturerId',
      label: 'Manufacturer Id',
      suffixIcon: 'numbers',
    };
  }

  override propertyNames(): KeyOf<IManufacturerView>[] {
    return [
      this.name().name,
      this.manufacturerId().name,
      ...super.propertyNames(),
    ];
  }

  override columns(): PropertyMetadata<IManufacturerView>[] {
    return [this.name(), this.manufacturerId(), ...super.columns()];
  }
}
