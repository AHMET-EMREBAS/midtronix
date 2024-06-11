import {
  EntityMetadata,
  PropertyMetadata,
  BaseViewMetadata,
  KeyOf,
} from '@mdtx/common';
import { IEmailView } from './email-view';

export class EmailViewMetadata
  extends BaseViewMetadata<IEmailView>
  implements EntityMetadata<IEmailView>
{
  email(): PropertyMetadata<IEmailView> {
    return {
      name: 'email',
      label: 'Email',
      suffixIcon: 'email',
      order: 201,
    };
  }

  userId(): PropertyMetadata<IEmailView> {
    return {
      name: 'userId',
      label: 'User Id',
      suffixIcon: 'person',
      order: 211,
    };
  }

  emailId(): PropertyMetadata<IEmailView> {
    return {
      name: 'emailId',
      label: 'Email Id',
      suffixIcon: 'numbers',
      order: 210,
    };
  }

  override propertyNames(): KeyOf<IEmailView>[] {
    return [
      this.email().name,
      this.emailId().name,
      this.userId().name,
      ...super.propertyNames(),
    ];
  }

  override columns(): PropertyMetadata<IEmailView>[] {
    return [this.email(), this.emailId(), this.userId(), ...super.columns()];
  }
}
