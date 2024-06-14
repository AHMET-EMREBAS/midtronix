import {
  EntityMetadata,
  PropertyMetadata,
  BaseEntityMetadata,
  KeyOf,
} from '@mdtx/common';
import { IQuantity } from './quantity';

export class QuantityMetadata
  extends BaseEntityMetadata<IQuantity>
  implements EntityMetadata<IQuantity>
{
  override propertyNames(): KeyOf<IQuantity>[] {
    return [this.name().name, ...super.propertyNames()];
  }

  override columns(): PropertyMetadata<IQuantity>[] {
    return [this.name(), ...super.columns()];
  }

  protected override formFields() {
    return [this.name(), ...super.formFields()];
  }
}
