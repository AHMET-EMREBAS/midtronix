import {
  EntityMetadata,
  PropertyMetadata,
  BaseEntityMetadata,
  KeyOf,
  USA_STATES,
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
      order: 201,
    };
  }

  city(): PropertyMetadata<IAddress> {
    return {
      name: 'city',
      label: 'city',
      inputType: 'text',
      type: 'string',
      prefixIcon: 'location_city',
      order: 202,
    };
  }

  state(): PropertyMetadata<IAddress> {
    return {
      name: 'state',
      label: 'state',
      inputType: 'select-one-enum',
      enum: [...USA_STATES],
      type: 'string',
      prefixIcon: 'flag',
      order: 203,
    };
  }

  zip(): PropertyMetadata<IAddress> {
    return {
      name: 'zip',
      label: 'zip',
      type: 'string',
      inputType: 'text',
      prefixIcon: 'local_post_office',
      order: 204,
    };
  }
  country(): PropertyMetadata<IAddress> {
    return {
      name: 'country',
      label: 'country',
      inputType: 'text',
      type: 'string',
      prefixIcon: 'flag',
      order: 205,
    };
  }

  user(): PropertyMetadata<IAddress> {
    return {
      name: 'user',
      label: 'user',
      type: 'string',
      inputType: 'select-one-entity',
      prefixIcon: 'person',
      order: 206,
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
      this.user(),
      ...super.formFields(),
    ];
  }
}
