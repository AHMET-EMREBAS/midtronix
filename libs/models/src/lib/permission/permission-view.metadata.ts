import {
  EntityMetadata,
  PropertyMetadata,
  BaseViewMetadata,
  KeyOf,
} from '@mdtx/common';
import { IPermissionView } from './permission-view';

export class PermissionViewMetadata
  extends BaseViewMetadata<IPermissionView>
  implements EntityMetadata<IPermissionView>
{
  permissionId(): PropertyMetadata<IPermissionView> {
    return {
      name: 'permissionId',
      label: 'Permission Id',
      suffixIcon: 'numbers',
    };
  }

  override propertyNames(): KeyOf<IPermissionView>[] {
    return [
      this.name().name,
      this.permissionId().name,
      ...super.propertyNames(),
    ];
  }

  override columns(): PropertyMetadata<IPermissionView>[] {
    return [this.name(), this.permissionId(), ...super.columns()];
  }
}
