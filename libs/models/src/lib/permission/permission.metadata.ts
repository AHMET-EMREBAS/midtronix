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
    };
  }
  
  override propertyNames(): KeyOf<IPermission>[] {
    return [this.name().name, ...super.propertyNames()];
  }

  override columns(): PropertyMetadata<IPermission>[] {
    return [this.actionName(), this.resourceName(), ...super.columns()];
  }

  protected override formFields() {
    return [this.actionName(), this.resourceName(), ...super.formFields()];
  }
}
