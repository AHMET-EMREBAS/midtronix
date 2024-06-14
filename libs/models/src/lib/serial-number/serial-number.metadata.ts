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
      label: 'Serialnumber',
      type: 'string',
      inputType: 'text',
      prefixIcon: 'confirmation_number',
      required: true,
      order: 211,
    };
  }

  sku(): PropertyMetadata<ISerialNumber> {
    return {
      name: 'sku',
      label: 'Product',
      type: 'object',
      inputType: 'select-one-entity',
      entityName: 'Product',
      mapValue(value) {
        return value.sku.name;
      },
      prefixIcon: 'inventory2',
      required: true,
      order: 212,
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
      this.sku(),
      ...super.columns(),
    ];
  }

  protected override formFields() {
    return [
      this.serialNumber(),
      this.status(),
      this.sku(),
      ...super.formFields(),
    ];
  }
}
