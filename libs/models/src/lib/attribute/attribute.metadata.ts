import {
  EntityMetadata,
  PropertyMetadata,
  BaseEntityMetadata,
  KeyOf,
} from '@mdtx/common';
import { IAttribute } from './attribute';

export class AttributeMetadata
  extends BaseEntityMetadata<IAttribute>
  implements EntityMetadata<IAttribute>
{
  sku(): PropertyMetadata<IAttribute> {
    return {
      name: 'sku',
      label: 'Sku',
      type: 'object',
      inputType: 'select-one-entity',
      entityName: 'Sku',
      required: true,
      order: 200,
      mapValue(value) {
        return value.sku.sku;
      },
    };
  }

  key(): PropertyMetadata<IAttribute> {
    return {
      name: 'key',
      label: 'Key',
      type: 'string',
      inputType: 'text',
      prefixIcon: 'variable_add',
      required: true,
      minlength: 1,
      order: 201,
    };
  }

  value(): PropertyMetadata<IAttribute> {
    return {
      name: 'value',
      label: 'Value',
      type: 'string',
      inputType: 'text',
      prefixIcon: 'variable_add',
      required: true,
      minlength: 1,
      order: 202,
    };
  }

  override propertyNames(): KeyOf<IAttribute>[] {
    return [
      this.key().name,
      this.value().name,
      this.sku().name,
      ...super.propertyNames(),
    ];
  }

  override columns(): PropertyMetadata<IAttribute>[] {
    return [this.key(), this.value(), this.sku(), ...super.columns()];
  }

  protected override formFields() {
    return [this.key(), this.value(), this.sku(), ...super.formFields()];
  }
}
