import {
  EntityMetadata,
  PropertyMetadata,
  BaseViewMetadata,
  KeyOf,
} from '@mdtx/common';
import { ISerialNumberView } from './serial-number-view';

export class SerialNumberViewMetadata
  extends BaseViewMetadata<ISerialNumberView>
  implements EntityMetadata<ISerialNumberView>
{
  sku(): PropertyMetadata<ISerialNumberView> {
    return {
      name: 'sku',
      label: 'Sku',
      order: 201,
    };
  }
  
  status(): PropertyMetadata<ISerialNumberView> {
    return {
      name: 'status',
      label: 'Status',
      order: 213,
    };
  }

  eid(): PropertyMetadata<ISerialNumberView> {
    return {
      name: 'eid',
      label: 'SerialNumber Id',
      suffixIcon: 'numbers',
      order: 210,
    };
  }

  serialNumber(): PropertyMetadata<ISerialNumberView> {
    return {
      name: 'serialNumber',
      label: 'Serial Number',
      order: 211,
    };
  }

  skuId(): PropertyMetadata<ISerialNumberView> {
    return {
      name: 'skuId',
      label: 'Product Id',
      order: 212,
    };
  }

  override propertyNames(): KeyOf<ISerialNumberView>[] {
    return [
      this.name().name,
      this.eid().name,
      this.serialNumber().name,
      this.status().name,
      this.skuId().name,
      ...super.propertyNames(),
    ];
  }

  override columns(): PropertyMetadata<ISerialNumberView>[] {
    return [
      this.name(),
      this.serialNumber(),
      this.skuId(),
      this.status(),
      this.eid(),
      ...super.columns(),
    ];
  }
}
