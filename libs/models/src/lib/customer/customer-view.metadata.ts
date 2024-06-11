import {
  EntityMetadata,
  PropertyMetadata,
  BaseViewMetadata,
  KeyOf,
} from '@mdtx/common';
import { ICustomerView } from './customer-view';

export class CustomerViewMetadata
  extends BaseViewMetadata<ICustomerView>
  implements EntityMetadata<ICustomerView>
{
  customerId(): PropertyMetadata<ICustomerView> {
    return {
      name: 'customerId',
      label: 'Customer Id',
      suffixIcon: 'numbers',
      order: 231,
    };
  }

  override propertyNames(): KeyOf<ICustomerView>[] {
    return [this.name().name, this.customerId().name, ...super.propertyNames()];
  }

  override columns(): PropertyMetadata<ICustomerView>[] {
    return [this.name(), this.customerId(), ...super.columns()];
  }
}
