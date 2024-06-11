import {
  EntityMetadata,
  PropertyMetadata,
  BaseViewMetadata,
  KeyOf,
} from '@mdtx/common';
import { IRoleView } from './role-view';

export class RoleViewMetadata
  extends BaseViewMetadata<IRoleView>
  implements EntityMetadata<IRoleView>
{
  roleId(): PropertyMetadata<IRoleView> {
    return { name: 'roleId', label: 'Role Id', suffixIcon: 'numbers' };
  }

  override propertyNames(): KeyOf<IRoleView>[] {
    return [this.name().name, this.roleId().name, ...super.propertyNames()];
  }

  override columns(): PropertyMetadata<IRoleView>[] {
    return [this.name(), this.roleId(), ...super.columns()];
  }
}
