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
  phoneId(): PropertyMetadata<IPhoneView> {
    return { name: 'phoneId', label: 'Phone Id', suffixIcon: 'numbers' };
  }

  override propertyNames(): KeyOf<IPhoneView>[] {
    return [this.name().name, this.phoneId().name, ...super.propertyNames()];
  }

  override columns(): PropertyMetadata<IPhoneView>[] {
    return [this.name(), this.phoneId(), ...super.columns()];
  }
}
