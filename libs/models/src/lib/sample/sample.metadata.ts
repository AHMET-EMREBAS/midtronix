import {
  EntityMetadata,
  PropertyMetadata,
  BaseEntityMetadata,
  TableFields,
  KeyOf,
} from '@mdtx/common';
import { ISample } from './sample';

export class SampleMetadata
  extends BaseEntityMetadata<ISample>
  implements EntityMetadata<ISample>
{
  category(): PropertyMetadata<ISample> {
    return {
      name: 'category',
      label: 'Category',
      type: 'string',
      inputType: 'select-one-enum',
      enum: ['First', 'Second', 'Third'],
    };
  }
  name(): PropertyMetadata<ISample> {
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

  override propertyNames(): KeyOf<ISample>[] {
    return [this.name().name, this.category().name, ...super.propertyNames()];
  }

  override tableColumnNames(): TableFields<ISample> {
    return [...super.tableColumnNames()];
  }

  override columns(): PropertyMetadata<ISample>[] {
    return [this.name(), ...super.columns()];
  }

  override formFields() {
    return [this.name(), this.category(), this.active()];
  }
}
