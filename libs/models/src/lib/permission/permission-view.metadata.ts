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
  resourceName(): PropertyMetadata<IPermissionView> {
    return {
      name: 'resourceName',
      label: 'Resource Name',
      suffixIcon: 'database',
      order: 202,
    };
  }

  actionName(): PropertyMetadata<IPermissionView> {
    return {
      name: 'actionName',
      label: 'Action Name',
      suffixIcon: 'shield',

      order: 203,
    };
  }

  permissionId(): PropertyMetadata<IPermissionView> {
    return {
      name: 'permissionId',
      label: 'Permission Id',
      suffixIcon: 'numbers',
      order: 200,
    };
  }

  override propertyNames(): KeyOf<IPermissionView>[] {
    return [
      this.name().name,
      this.resourceName().name,
      this.actionName().name,
      this.permissionId().name,
      ...super.propertyNames(),
    ];
  }

  override columns(): PropertyMetadata<IPermissionView>[] {
    return [
      this.name(),
      this.resourceName(),
      this.actionName(),
      this.permissionId(),
      ...super.columns(),
    ];
  }
}
