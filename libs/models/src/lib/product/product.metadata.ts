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
  name(): PropertyMetadata<IProduct> {
    return {
      name: 'name',
      label: 'Name',
      type: 'string',
      inputType: 'text',
      required: true,
      minlength: 3,
      maxlength: 50,
      order: 201,
    };
  }

  description(): PropertyMetadata<IProduct> {
    return {
      name: 'description',
      label: 'Description',
      type: 'string',
      inputType: 'textarea',
      prefixIcon: 'description',
      maxlength: 400,
      order: 202,
    };
  }

  upc(): PropertyMetadata<IProduct> {
    return {
      name: 'upc',
      label: 'Barcode',
      type: 'string',
      inputType: 'text',
      prefixIcon: 'barcode',
      required: true,
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

  supplier(): PropertyMetadata<IProduct> {
    return {
      name: 'supplier',
      type: 'object',
      inputType: 'select-one-entity',
      required: false,
      prefixIcon: 'trolley',
      mapValue(value) {
        return value.supplier.name;
      },
      order: 231,
    };
  }

  category(): PropertyMetadata<IProduct> {
    return {
      name: 'category',
      type: 'string',
      inputType: 'select-one-entity',
      prefixIcon: 'category',
      required: true,
      mapValue(value) {
        return value.category.name;
      },
    };
  }

  override propertyNames(): KeyOf<IProduct>[] {
    return [this.name().name, ...super.propertyNames()];
  }

  override columns(): PropertyMetadata<IProduct>[] {
    return [this.name(), ...super.columns()];
  }

  protected override formFields() {
    return [this.name(), ...super.formFields()];
  }
}
