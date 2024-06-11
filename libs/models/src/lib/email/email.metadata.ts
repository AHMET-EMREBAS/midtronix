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
  override propertyNames(): KeyOf<IEmail>[] {
    return [this.name().name, ...super.propertyNames()];
  }

  override columns(): PropertyMetadata<IEmail>[] {
    return [this.name(), ...super.columns()];
  }

  protected override formFields() {
    return [this.name(), ...super.formFields()];
  }
}
