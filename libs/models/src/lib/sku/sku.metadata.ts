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
      order: 200,
      prefixIcon: 'inventory2',
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
