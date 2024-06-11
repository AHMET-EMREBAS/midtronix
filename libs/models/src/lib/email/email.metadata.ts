import {
  EntityMetadata,
  PropertyMetadata,
  BaseEntityMetadata,
  KeyOf,
} from '@mdtx/common';
import { IEmail } from './email';

export class EmailMetadata
  extends BaseEntityMetadata<IEmail>
  implements EntityMetadata<IEmail>
{
  email(): PropertyMetadata<IEmail> {
    return {
      name: 'email',
      label: 'Email',
      type: 'string',
      inputType: 'text',
      format: 'email',
      required: true,
      prefixIcon: 'email',
      order: 201,
    };
  }

  override propertyNames(): KeyOf<IEmail>[] {
    return [this.email().name, ...super.propertyNames()];
  }

  override columns(): PropertyMetadata<IEmail>[] {
    return [this.email(), this.user(), ...super.columns()];
  }

  protected override formFields() {
    return [this.email(), ...super.formFields()];
  }
}
