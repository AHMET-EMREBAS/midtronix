import {
  EntityMetadata,
  PropertyMetadata,
  BaseEntityMetadata,
} from '@mdtx/common';
import { ISample } from './sample';

export class SampleMetadata
  extends BaseEntityMetadata<ISample>
  implements EntityMetadata<ISample>
{
  name(): PropertyMetadata<ISample> {
    return {
      label: 'Sample Name',
    };
  }

  override fields(): (keyof ISample)[] {
    return ['name', ...super.fields()];
  }

  override tableColumns(): PropertyMetadata<ISample>[] {
    return [this.name(), ...super.tableColumns()];
  }

  override tableDisplayedColumns(): PropertyMetadata<ISample>[] {
    return [this.name(), ...super.tableDisplayedColumns()];
  }
}
