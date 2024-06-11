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
  phone(): PropertyMetadata<IPhone> {
    return {
      name: 'phone',
      label: 'Phone Number',
      type: 'string',
      inputType: 'text',
      format: 'phone',
      suffixIcon: 'phone',
      required: true,
      order: 201,
    };
  }

  override propertyNames(): KeyOf<IPhone>[] {
    return [this.phone().name, ...super.propertyNames()];
  }

  override columns(): PropertyMetadata<IPhone>[] {
    return [this.phone(), ...super.columns()];
  }

  protected override formFields() {
    return [this.phone(), ...super.formFields()];
  }
}
