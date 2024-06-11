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
  emailId(): PropertyMetadata<IEmailView> {
    return { name: 'emailId', label: 'Email Id', suffixIcon: 'numbers' };
  }

  override propertyNames(): KeyOf<IEmailView>[] {
    return [this.name().name, this.emailId().name, ...super.propertyNames()];
  }

  override columns(): PropertyMetadata<IEmailView>[] {
    return [this.name(), this.emailId(), ...super.columns()];
  }
}
