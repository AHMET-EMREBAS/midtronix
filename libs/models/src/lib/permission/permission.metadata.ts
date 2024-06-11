import {
  EntityMetadata,
  PropertyMetadata,
  BaseEntityMetadata,
  KeyOf,
  ResourceNames,
  ResourceActionList,
} from '@mdtx/common';
import { IPermission } from './permission';

export class PermissionMetadata
  extends BaseEntityMetadata<IPermission>
  implements EntityMetadata<IPermission>
{
  resourceName(): PropertyMetadata<IPermission> {
    return {
      name: 'resourceName',
      label: 'Resource Name',
      suffixIcon: 'info',
      required: true,
      type: 'string',
      inputType: 'select-one-enum',
      enum: [...ResourceNames],
      order: 202,
    };
  }

  actionName(): PropertyMetadata<IPermission> {
    return {
      name: 'actionName',
      label: 'Action Name',
      suffixIcon: 'action',
      required: true,
      type: 'string',
      inputType: 'select-one-enum',
      enum: [...ResourceActionList],
      order: 203,
    };
  }

  override propertyNames(): KeyOf<IPermission>[] {
    return [
      this.name().name,
      this.resourceName().name,
      this.actionName().name,
      ...super.propertyNames(),
    ];
  }

  override columns(): PropertyMetadata<IPermission>[] {
    return [
      this.name(),
      this.actionName(),
      this.resourceName(),
      ...super.columns(),
    ];
  }

  protected override formFields() {
    return [this.actionName(), this.resourceName(), ...super.formFields()];
  }
}