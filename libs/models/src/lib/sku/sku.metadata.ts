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
  sku(): PropertyMetadata<ISku> {
    return {
      name: 'sku',
      label: 'Sku',
      prefixIcon: '',
    };
  }

  override propertyNames(): KeyOf<ISku>[] {
    return [this.name().name, ...super.propertyNames()];
  }

  override columns(): PropertyMetadata<ISku>[] {
    return [this.name(), ...super.columns()];
  }

  protected override formFields() {
    return [this.name(), ...super.formFields()];
  }
}
