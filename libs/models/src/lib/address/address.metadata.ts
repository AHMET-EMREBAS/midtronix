import {
  EntityMetadata,
  PropertyMetadata,
  BaseEntityMetadata,
  KeyOf,
} from '@mdtx/common';
import { IAddress } from './address';

export class AddressMetadata
  extends BaseEntityMetadata<IAddress>
  implements EntityMetadata<IAddress>
{
  street(): PropertyMetadata<IAddress> {
    return {
      name: 'street',
      label: 'street',
      type: 'string',
      inputType: 'text',
      prefixIcon: 'streetview',
      order: 211,
    };
  }

  city(): PropertyMetadata<IAddress> {
    return {
      name: 'city',
      label: 'city',
      inputType: 'text',
      type: 'string',
      prefixIcon: 'location_city',
      order: 212,
    };
  }

  state(): PropertyMetadata<IAddress> {
    return {
      name: 'state',
      label: 'state',
      inputType: 'text',
      type: 'string',
      prefixIcon: 'flag',
      order: 213,
    };
  }

  zip(): PropertyMetadata<IAddress> {
    return {
      name: 'zip',
      label: 'zip',
      type: 'string',
      inputType: 'text',
      prefixIcon: 'local_post_office',
      order: 214,
    };
  }

  country(): PropertyMetadata<IAddress> {
    return {
      name: 'country',
      label: 'country',
      inputType: 'text',
      type: 'string',
      prefixIcon: 'flag',
      order: 215,
    };
  }

  override user(): PropertyMetadata<IAddress> {
    return {
      ...super.user(),
      mapValue(value) {
        return value.user.id + '';
      },
    };
  }

  override propertyNames(): KeyOf<IAddress>[] {
    return [this.name().name, ...super.propertyNames()];
  }

  override columns(): PropertyMetadata<IAddress>[] {
    return [
      this.street(),
      this.city(),
      this.state(),
      this.country(),
      this.zip(),
      this.user(),
      ...super.columns(),
    ];
  }

  protected override formFields() {
    return [
      this.street(),
      this.city(),
      this.state(),
      this.country(),
      this.zip(),
      ...super.formFields(),
    ];
  }
}
