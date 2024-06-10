import {
  EntityMetadata,
  PropertyMetadata,
  BaseEntityMetadata,
  TableFields,
  KeyOf,
  ValidatorBuilder,
} from '@mdtx/common';
import { IStore } from './store';

export class StoreMetadata
  extends BaseEntityMetadata<IStore>
  implements EntityMetadata<IStore>
{
  name(): PropertyMetadata<IStore> {
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

  override propertyNames(): KeyOf<IStore>[] {
    return [this.name().name, ...super.propertyNames()];
  }

  override tableColumnNames(): TableFields<IStore> {
    return [...super.tableColumnNames()];
  }

  override columns(): PropertyMetadata<IStore>[] {
    return [this.name(), ...super.columns()];
  }

  override formFields() {
    return [this.name(), ...super.formFields()];
  }
}
