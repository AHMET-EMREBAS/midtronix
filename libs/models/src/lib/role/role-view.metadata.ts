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
  permission(): PropertyMetadata<IRoleView> {
    return {
      name: 'permission',
      label: 'Permission',
      suffixIcon: 'shield',
      order: 202,
    };
  }

  permissionId(): PropertyMetadata<IRoleView> {
    return {
      name: 'permissionId',
      label: 'Permission Id',
      suffixIcon: 'numbers',
      order: 203,
    };
  }

  roleId(): PropertyMetadata<IRoleView> {
    return {
      name: 'roleId',
      label: 'Role Id',
      suffixIcon: 'numbers',
      order: 204,
    };
  }

  override propertyNames(): KeyOf<IRoleView>[] {
    return [
      this.name().name,
      this.permission().name,
      this.permissionId().name,
      this.roleId().name,
      ...super.propertyNames(),
    ];
  }

  override columns(): PropertyMetadata<IRoleView>[] {
    return [
      this.name(),
      this.permission(),
      this.permissionId(),
      this.roleId(),
      ...super.columns(),
    ];
  }
}
