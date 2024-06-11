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
  permissions(): PropertyMetadata<IRole> {
    return {
      name: 'permissions',
      label: 'Permissions',
      suffixIcon: 'shield',
      type: 'object',
      isArray: true,
      entityName: 'Permission',
      inputType: 'chip-select',
      mapValue(value) {
        return value.permissions.map((e) => e.name).join(', ');
      },
      order: 202,
    };
  }
  override propertyNames(): KeyOf<IRole>[] {
    return [
      this.name().name,
      this.permissions().name,
      ...super.propertyNames(),
    ];
  }

  override columns(): PropertyMetadata<IRole>[] {
    return [this.name(), this.permissions(), ...super.columns()];
  }

  protected override formFields() {
    return [this.name(), this.permissions(), ...super.formFields()];
  }
}
