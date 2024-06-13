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

  productId(): PropertyMetadata<ISerialNumberView> {
    return {
      name: 'productId',
      label: 'Product Id',
      order: 212,
    };
  }

  override propertyNames(): KeyOf<ISerialNumberView>[] {
    return [
      this.name().name,
      this.eid().name,
      this.serialNumber().name,
      this.productId().name,
      ...super.propertyNames(),
    ];
  }

  override columns(): PropertyMetadata<ISerialNumberView>[] {
    return [
      this.name(),
      this.serialNumber(),
      this.productId(),
      this.eid(),
      ...super.columns(),
    ];
  }
}
