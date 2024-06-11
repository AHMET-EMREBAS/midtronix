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
  userId(): PropertyMetadata<IUserView> {
    return { name: 'userId', label: 'User Id', suffixIcon: 'numbers' };
  }

  override propertyNames(): KeyOf<IUserView>[] {
    return [this.name().name, this.userId().name, ...super.propertyNames()];
  }

  override columns(): PropertyMetadata<IUserView>[] {
    return [this.name(), this.userId(), ...super.columns()];
  }
}
