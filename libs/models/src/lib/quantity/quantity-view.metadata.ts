import {
  EntityMetadata,
  PropertyMetadata,
  BaseViewMetadata,
  KeyOf,
} from '@mdtx/common';
import { IQuantityView } from './quantity-view';

export class QuantityViewMetadata
  extends BaseViewMetadata<IQuantityView>
  implements EntityMetadata<IQuantityView>
{
  eid(): PropertyMetadata<IQuantityView> {
    return {
      name: 'eid',
      label: 'Quantity Id',
      suffixIcon: 'numbers',
      order: 245,
    };
  }

  override propertyNames(): KeyOf<IQuantityView>[] {
    return [this.name().name, this.eid().name, ...super.propertyNames()];
  }

  override columns(): PropertyMetadata<IQuantityView>[] {
    return [this.name(), this.eid(), ...super.columns()];
  }
}
