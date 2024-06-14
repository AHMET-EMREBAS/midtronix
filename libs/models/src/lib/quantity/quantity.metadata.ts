import {
  EntityMetadata,
  PropertyMetadata,
  BaseEntityMetadata,
  KeyOf,
} from '@mdtx/common';
import { IQuantity } from './quantity';

export class QuantityMetadata
  extends BaseEntityMetadata<IQuantity>
  implements EntityMetadata<IQuantity>
{
  quantity(): PropertyMetadata<IQuantity> {
    return {
      name: 'quantity',
      label: 'Quantity',
      type: 'number',
      inputType: 'number',
      prefixIcon: 'numbers',
      required: true,
      min: 0,
      order: 211,
    };
  }

  store(): PropertyMetadata<IQuantity> {
    return {
      name: 'store',
      label: 'Store',
      type: 'object',
      inputType: 'select-one-entity',
      prefixIcon: 'store',
      required: true,
      min: 0,
      mapValue(value) {
        return value.store.name;
      },
      order: 212,
    };
  }

  sku(): PropertyMetadata<IQuantity> {
    return {
      name: 'sku',
      label: 'Sku',
      type: 'object',
      inputType: 'select-one-entity',
      prefixIcon: 'numbers',
      required: true,
      min: 0,
      mapValue(value) {
        return value.sku.name;
      },
      order: 213,
    };
  }
  override propertyNames(): KeyOf<IQuantity>[] {
    return [
      this.quantity().name,
      this.store().name,
      this.sku().name,
      ...super.propertyNames(),
    ];
  }

  override columns(): PropertyMetadata<IQuantity>[] {
    return [this.quantity(), this.sku(), this.store(), ...super.columns()];
  }

  protected override formFields() {
    return [this.quantity(), this.sku(), this.store(), ...super.formFields()];
  }
}
