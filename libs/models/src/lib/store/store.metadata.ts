import {
  EntityMetadata,
  PropertyMetadata,
  BaseEntityMetadata,
  KeyOf,
} from '@mdtx/common';
import { IStore } from './store';

export class StoreMetadata
  extends BaseEntityMetadata<IStore>
  implements EntityMetadata<IStore>
{
  override propertyNames(): KeyOf<IStore>[] {
    return [this.name().name, ...super.propertyNames()];
  }

  override columns(): PropertyMetadata<IStore>[] {
    return [this.name(), ...super.columns()];
  }

  protected override formFields() {
    return [this.name(), ...super.formFields()];
  }
}
