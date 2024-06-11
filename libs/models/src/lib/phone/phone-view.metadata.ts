import {
  EntityMetadata,
  PropertyMetadata,
  BaseViewMetadata,
  KeyOf,
} from '@mdtx/common';
import { IPhoneView } from './phone-view';

export class PhoneViewMetadata
  extends BaseViewMetadata<IPhoneView>
  implements EntityMetadata<IPhoneView>
{
  userId(): PropertyMetadata<IPhoneView> {
    return {
      name: 'userId',
      label: 'User Id',
      suffixIcon: 'numbers',
      order: 231,
    };
  }

  phone(): PropertyMetadata<IPhoneView> {
    return { name: 'phone', label: 'Phone', suffixIcon: 'phone', order: 202 };
  }
  
  phoneId(): PropertyMetadata<IPhoneView> {
    return {
      name: 'phoneId',
      label: 'Phone Id',
      suffixIcon: 'numbers',
      order: 201,
    };
  }

  override propertyNames(): KeyOf<IPhoneView>[] {
    return [this.phone().name, this.phoneId().name, ...super.propertyNames()];
  }

  override columns(): PropertyMetadata<IPhoneView>[] {
    return [this.phone(), this.phoneId(), ...super.columns()];
  }
}
