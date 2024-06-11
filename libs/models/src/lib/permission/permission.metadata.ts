import {
  EntityMetadata,
  PropertyMetadata,
  BaseEntityMetadata,
  KeyOf,
} from '@mdtx/common';
import { IPermission } from './permission';

export class PermissionMetadata
  extends BaseEntityMetadata<IPermission>
  implements EntityMetadata<IPermission>
{
  override propertyNames(): KeyOf<IPermission>[] {
    return [this.name().name, ...super.propertyNames()];
  }

  override columns(): PropertyMetadata<IPermission>[] {
    return [this.name(), ...super.columns()];
  }

  protected override formFields() {
    return [this.name(), ...super.formFields()];
  }
}
