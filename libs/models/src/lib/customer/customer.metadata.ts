import {
  EntityMetadata,
  PropertyMetadata,
  BaseEntityMetadata,
  KeyOf,
} from '@mdtx/common';
import { ICustomer } from './customer';

export class CustomerMetadata
  extends BaseEntityMetadata<ICustomer>
  implements EntityMetadata<ICustomer>
{
  override propertyNames(): KeyOf<ICustomer>[] {
    return [this.name().name, ...super.propertyNames()];
  }

  override columns(): PropertyMetadata<ICustomer>[] {
    return [this.name(), ...super.columns()];
  }

  protected override formFields() {
    return [this.name(), ...super.formFields()];
  }
}
