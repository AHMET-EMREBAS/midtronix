import {
  EntityMetadata,
  PropertyMetadata,
  BaseEntityMetadata,
  TableFields,
  KeyOf,
} from '@mdtx/common';
import { ISupplier } from './supplier';

export class SupplierMetadata
  extends BaseEntityMetadata<ISupplier>
  implements EntityMetadata<ISupplier>
{
  name(): PropertyMetadata<ISupplier> {
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

  override propertyNames(): KeyOf<ISupplier>[] {
    return [this.name().name, ...super.propertyNames()];
  }

  override tableColumnNames(): TableFields<ISupplier> {
    return [...super.tableColumnNames()];
  }

  override columns(): PropertyMetadata<ISupplier>[] {
    return [this.name(), ...super.columns()];
  }

  override formFields() {
    return [this.name(), this.active()];
  }
}
