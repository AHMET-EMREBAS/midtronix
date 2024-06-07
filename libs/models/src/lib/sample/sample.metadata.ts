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
      order: 201,
    };
  }

  override propertyNames(): KeyOf<ISample>[] {
    return [this.name().name, ...super.propertyNames()];
  }

  override tableColumnNames(): TableFields<ISample> {
    return [...super.tableColumnNames()];
  }

  override tableColumns(): PropertyMetadata<ISample>[] {
    return [this.name(), ...super.tableColumns()];
  }
}
