import {
  EntityMetadata,
  PropertyMetadata,
  BaseEntityMetadata,
  KeyOf,
} from '@mdtx/common';
import { ISku } from './sku';

export class SkuMetadata
  extends BaseEntityMetadata<ISku>
  implements EntityMetadata<ISku>
{
  product(): PropertyMetadata<ISku> {
    return {
      name: 'product',
      label: 'Product',
      type: 'object',
      inputType: 'select-one-entity',
      entityName: 'Product',
      prefixIcon: 'inventory2',
      mapValue(value) {
        return value.product.upc;
      },
      order: 200,
    };
  }

  sku(): PropertyMetadata<ISku> {
    return {
      name: 'sku',
      label: 'Sku',
      type: 'string',
      inputType: 'text',
      prefixIcon: 'barcode',
      required: true,
      order: 201,
    };
  }

  override propertyNames(): KeyOf<ISku>[] {
    return [
      this.name().name,
      this.description().name,
      this.sku().name,
      this.product().name,
      ...super.propertyNames(),
    ];
  }

  override columns(): PropertyMetadata<ISku>[] {
    return [
      this.name(),
      this.description(),
      this.sku(),
      this.product(),
      ...super.columns(),
    ];
  }

  protected override formFields() {
    return [
      this.name(),
      this.description(),
      this.sku(),
      this.product(),
      ...super.formFields(),
    ];
  }
}
