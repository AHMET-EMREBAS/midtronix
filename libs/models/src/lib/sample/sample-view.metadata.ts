import {
  EntityMetadata,
  PropertyMetadata,
  BaseViewMetadata,
} from '@mdtx/common';
import { ISampleView } from './sample-view';

export class SampleViewMetadata
  extends BaseViewMetadata<ISampleView>
  implements EntityMetadata<ISampleView>
{
  sampleId(): PropertyMetadata<ISampleView> {
    return { label: 'Sample Id', suffixIcon: 'numbers' };
  }
  name(): PropertyMetadata<ISampleView> {
    return {
      label: 'Sample Name',
      suffixIcon: 'info',
    };
  }

  override fields(): (keyof ISampleView)[] {
    return ['name', ...super.fields()];
  }

  override tableColumns(): PropertyMetadata<ISampleView>[] {
    return [this.name(), this.sampleId(), ...super.tableColumns()];
  }

  override tableDisplayedColumns(): PropertyMetadata<ISampleView>[] {
    return [this.name(), this.sampleId(), ...super.tableDisplayedColumns()];
  }
}
