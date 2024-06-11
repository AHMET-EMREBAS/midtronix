import {
  EntityMetadata,
  PropertyMetadata,
  BaseViewMetadata,
  KeyOf,
} from '@mdtx/common';
import { IAddressView } from './address-view';

export class AddressViewMetadata
  extends BaseViewMetadata<IAddressView>
  implements EntityMetadata<IAddressView>
{
  userId(): PropertyMetadata<IAddressView> {
    return {
      name: 'userId',
      label: 'User',
      order: 201,
    };
  }
  street(): PropertyMetadata<IAddressView> {
    return {
      name: 'street',
      label: 'street',
      order: 202,
    };
  }
  city(): PropertyMetadata<IAddressView> {
    return {
      name: 'city',
      label: 'city',
      order: 203,
    };
  }
  
  state(): PropertyMetadata<IAddressView> {
    return {
      name: 'state',
      label: 'state',
      order: 204,
    };
  }

  zip(): PropertyMetadata<IAddressView> {
    return {
      name: 'zip',
      label: 'zip',
      order: 205,
    };
  }

  country(): PropertyMetadata<IAddressView> {
    return {
      name: 'country',
      label: 'country',
      order: 206,
    };
  }

  addressId(): PropertyMetadata<IAddressView> {
    return { name: 'addressId', label: 'Address Id', order: 207 };
  }

  override propertyNames(): KeyOf<IAddressView>[] {
    return [
      this.addressId().name,
      this.street().name,
      this.city().name,
      this.state().name,
      this.zip().name,
      this.country().name,

      ...super.propertyNames(),
    ];
  }

  override columns(): PropertyMetadata<IAddressView>[] {
    return [
      this.addressId(),
      this.street(),
      this.city(),
      this.state(),
      this.zip(),
      this.country(),

      ...super.columns(),
    ];
  }
}
