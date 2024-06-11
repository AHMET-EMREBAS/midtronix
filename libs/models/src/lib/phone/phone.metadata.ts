import {
  EntityMetadata,
  PropertyMetadata,
  BaseEntityMetadata,
  KeyOf,
} from '@mdtx/common';
import { IPhone } from './phone';

export class PhoneMetadata
  extends BaseEntityMetadata<IPhone>
  implements EntityMetadata<IPhone>
{
  override propertyNames(): KeyOf<IPhone>[] {
    return [this.name().name, ...super.propertyNames()];
  }

  override columns(): PropertyMetadata<IPhone>[] {
    return [this.name(), ...super.columns()];
  }

  protected override formFields() {
    return [this.name(), ...super.formFields()];
  }
}
