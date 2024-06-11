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
  username(): PropertyMetadata<IUser> {
    return {
      name: 'username',
      label: 'Username',
      type: 'string',
      inputType: 'text',
      suffixIcon: 'email',
      order: 201,
    };
  }

  roles(): PropertyMetadata<IUser> {
    return {
      name: 'roles',
      label: 'Roles',
      type: 'string',
      suffixIcon: 'email',
      entityName: 'Role',
      inputType: 'select-many-entity',
      order: 202,

      mapValue(value) {
        return value.roles?.map((e) => e.name).join(', ');
      },
    };
  }
  password(): PropertyMetadata<IUser> {
    return {
      name: 'password',
      label: 'Password',
      type: 'string',
      inputType: 'password',
      suffixIcon: 'email',
      order: 201,
    };
  }
  override propertyNames(): KeyOf<IUser>[] {
    return [this.username().name, ...super.propertyNames()];
  }

  override columns(): PropertyMetadata<IUser>[] {
    return [this.username(), this.roles(), ...super.columns()];
  }

  protected override formFields() {
    return [
      this.username(),
      this.password(),
      this.roles(),
      ...super.formFields(),
    ];
  }
}
