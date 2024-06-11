import {
  EntityMetadata,
  PropertyMetadata,
  BaseViewMetadata,
  KeyOf,
} from '@mdtx/common';
import { IUserView } from './user-view';

export class UserViewMetadata
  extends BaseViewMetadata<IUserView>
  implements EntityMetadata<IUserView>
{
  username(): PropertyMetadata<IUserView> {
    return {
      name: 'username',
      label: 'Username',
      type: 'string',
      inputType: 'text',
      format: 'email',
      order: 201,
    };
  }
  roles(): PropertyMetadata<IUserView> {
    return {
      name: 'roles',
      label: 'Roles',
      suffixIcon: 'user_badge',
      order: 202,
      
    };
  }

  userId(): PropertyMetadata<IUserView> {
    return {
      name: 'userId',
      label: 'User Id',
      suffixIcon: 'numbers',
      order: 203,
    };
  }

  override propertyNames(): KeyOf<IUserView>[] {
    return [
      this.username().name,
      this.roles().name,
      this.userId().name,
      ...super.propertyNames(),
    ];
  }

  override columns(): PropertyMetadata<IUserView>[] {
    return [this.username(), this.roles(), this.userId(), ...super.columns()];
  }
}
