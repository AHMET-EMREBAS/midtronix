import {
  EntityMetadata,
  PropertyMetadata,
  BaseEntityMetadata,
  KeyOf,
} from '@mdtx/common';
import { IPrice } from './price';

export class PriceMetadata
  extends BaseEntityMetadata<IPrice>
  implements EntityMetadata<IPrice>
{
  
  cost(): PropertyMetadata<IPrice> {
    return {
      name: 'cost',
      label: 'Cost',
      type: 'number',
      inputType: 'number',
      prefixIcon: 'money',
      required: true,
      order: 202,
    };
  }

  price(): PropertyMetadata<IPrice> {
    return {
      name: 'price',
      label: 'Price',
      type: 'number',
      inputType: 'number',
      prefixIcon: 'money',
      required: true,
      order: 203,
    };
  }

  priceLevel(): PropertyMetadata<IPrice> {
    return {
      name: 'priceLevel',
      label: 'Price Level',
      type: 'object',
      inputType: 'select-one-entity',
      entityName: 'PriceLevel',
      prefixIcon: 'layers',
      required: true,
      order: 200,
      mapValue(value) {
        return value.priceLevel?.name;
      },
    };
  }

  sku(): PropertyMetadata<IPrice> {
    return {
      name: 'sku',
      label: 'Sku',
      type: 'object',
      inputType: 'select-one-entity',
      entityName: 'Sku',
      prefixIcon: 'money',
      required: true,
      order: 200,
      mapValue(value) {
        return value.sku?.sku;
      },
    };
  }

  override propertyNames(): KeyOf<IPrice>[] {
    return [
      this.price().name,
      this.cost().name,
      this.sku().name,
      this.priceLevel().name,
      ...super.propertyNames(),
    ];
  }

  override columns(): PropertyMetadata<IPrice>[] {
    return [
      this.price(),
      this.cost(),
      this.sku(),
      this.priceLevel(),
      ...super.columns(),
    ];
  }

  protected override formFields() {
    return [
      this.price(),
      this.cost(),
      this.sku(),
      this.priceLevel(),
      ...super.formFields(),
    ];
  }
}
