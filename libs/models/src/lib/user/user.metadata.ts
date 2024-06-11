import {
  EntityMetadata,
  PropertyMetadata,
  BaseEntityMetadata,
  KeyOf,
} from '@mdtx/common';
import { IUser } from './user';

export class UserMetadata
  extends BaseEntityMetadata<IUser>
  implements EntityMetadata<IUser>
{
  override propertyNames(): KeyOf<IUser>[] {
    return [this.name().name, ...super.propertyNames()];
  }

  override columns(): PropertyMetadata<IUser>[] {
    return [this.name(), ...super.columns()];
  }

  protected override formFields() {
    return [this.name(), ...super.formFields()];
  }
}
