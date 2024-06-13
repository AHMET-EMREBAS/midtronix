import {
  EntityMetadata,
  PropertyMetadata,
  BaseEntityMetadata,
  KeyOf,
} from '@mdtx/common';
import { IProduct } from './product';

export class ProductMetadata
  extends BaseEntityMetadata<IProduct>
  implements EntityMetadata<IProduct>
{
  upc(): PropertyMetadata<IProduct> {
    return {
      name: 'upc',
      label: 'Barcode',
      type: 'string',
      inputType: 'text',
      prefixIcon: 'barcode',
      maxlength: 13,
      minlength: 8,
      order: 203,
    };
  }

  brand(): PropertyMetadata<IProduct> {
    return {
      name: 'brand',
      label: 'Brand',
      type: 'string',
      inputType: 'text',
      order: 204,
    };
  }

  price(): PropertyMetadata<IProduct> {
    return {
      name: 'price',
      label: 'Price',
      type: 'number',
      inputType: 'number',
      prefixIcon: 'money',
      required: true,
      min: 0,
      order: 211,
    };
  }

  cost(): PropertyMetadata<IProduct> {
    return {
      name: 'cost',
      label: 'Cost',
      type: 'number',
      inputType: 'number',
      prefixIcon: 'money',
      min: 0,
      lessThanProperty: 'price',
      order: 212,
    };
  }

  quantity(): PropertyMetadata<IProduct> {
    return {
      name: 'quantity',
      label: 'Quantity',
      type: 'number',
      inputType: 'number',
      prefixIcon: 'numbers',
      required: true,
      min: 0,
      order: 221,
    };
  }

  category(): PropertyMetadata<IProduct> {
    return {
      name: 'category',
      type: 'string',
      label: 'Category',
      inputType: 'select-one-entity',
      prefixIcon: 'category',
      entityName: 'Category',
      labelKey: 'name',
      order: 231,
      mapValue(value) {
        return value.category?.name;
      },
    };
  }
  supplier(): PropertyMetadata<IProduct> {
    return {
      name: 'supplier',
      label: 'Supplier',
      type: 'object',
      inputType: 'select-one-entity',
      prefixIcon: 'trolley',
      entityName: 'Supplier',
      labelKey: 'name',
      mapValue(value) {
        return value.supplier?.name;
      },
      order: 232,
    };
  }

  serialNumberRequired(): PropertyMetadata<IProduct> {
    return {
      name: 'serialNumberRequired',
      label: 'Serial Number',
      type: 'boolean',
      inputType: 'checkbox',
      order: 301,
    };
  }

  override propertyNames(): KeyOf<IProduct>[] {
    return [
      this.name().name,
      this.upc().name,
      this.brand().name,
      this.category().name,
      this.supplier().name,
      this.cost().name,
      this.price().name,
      this.quantity().name,
      this.description().name,
      this.serialNumberRequired().name,
      ...super.propertyNames(),
    ];
  }

  override columns(): PropertyMetadata<IProduct>[] {
    return [
      this.name(),
      this.upc(),
      this.brand(),
      this.category(),
      this.supplier(),
      this.cost(),
      this.price(),
      this.quantity(),
      this.description(),
      this.serialNumberRequired(),
      ...super.columns(),
    ];
  }

  protected override formFields() {
    return [
      this.name(),
      this.upc(),
      this.brand(),
      this.category(),
      this.supplier(),
      this.cost(),
      this.price(),
      this.quantity(),
      this.description(),
      this.serialNumberRequired(),
      ...super.formFields(),
    ];
  }
}
