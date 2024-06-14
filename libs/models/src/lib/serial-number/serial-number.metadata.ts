import {
  EntityMetadata,
  PropertyMetadata,
  BaseEntityMetadata,
  KeyOf,
} from '@mdtx/common';
import { ISerialNumber, SerialNumberStatus } from './serial-number';

export class SerialNumberMetadata
  extends BaseEntityMetadata<ISerialNumber>
  implements EntityMetadata<ISerialNumber>
{
  serialNumber(): PropertyMetadata<ISerialNumber> {
    return {
      name: 'serialNumber',
      label: 'Serial Number',
      type: 'string',
      inputType: 'text',
      prefixIcon: 'confirmation_number',
      required: true,
      order: 211,
    };
  }

  product(): PropertyMetadata<ISerialNumber> {
    return {
      name: 'product',
      label: 'Sku',
      type: 'object',
      inputType: 'select-one-entity',
      entityName: 'Sku',
      mapValue(value) {
        return value.product.name;
      },
      prefixIcon: 'inventory2',
      required: true,
      order: 201,
    };
  }

  status(): PropertyMetadata<ISerialNumber> {
    return {
      name: 'status',
      label: 'Status',
      inputType: 'select-one-enum',
      enum: ['in stock', 'returned', 'sold'] as SerialNumberStatus[],
      prefixIcon: 'status',
      order: 213,
    };
  }

  override propertyNames(): KeyOf<ISerialNumber>[] {
    return [
      this.serialNumber().name,
      this.status().name,
      ...super.propertyNames(),
    ];
  }

  override columns(): PropertyMetadata<ISerialNumber>[] {
    return [
      this.serialNumber(),
      this.status(),
      this.product(),
      ...super.columns(),
    ];
  }

  protected override formFields() {
    return [
      this.serialNumber(),
      this.status(),
      this.product(),
      ...super.formFields(),
    ];
  }
}
