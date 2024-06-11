import {
  EntityMetadata,
  PropertyMetadata,
  BaseEntityMetadata,
  KeyOf,
} from '@mdtx/common';
import { IRole } from './role';

export class RoleMetadata
  extends BaseEntityMetadata<IRole>
  implements EntityMetadata<IRole>
{
  override propertyNames(): KeyOf<IRole>[] {
    return [this.name().name, ...super.propertyNames()];
  }

  override columns(): PropertyMetadata<IRole>[] {
    return [this.name(), ...super.columns()];
  }

  protected override formFields() {
    return [this.name(), ...super.formFields()];
  }
}
