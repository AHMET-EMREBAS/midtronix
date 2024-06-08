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
    return [this.name().name, ...super.propertyNames()];
  }

  override tableColumnNames(): TableFields<ISample> {
    return [...super.tableColumnNames()];
  }

  override columns(): PropertyMetadata<ISample>[] {
    return [this.name(), ...super.columns()];
  }
}
