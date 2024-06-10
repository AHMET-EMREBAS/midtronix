import {
  EntityMetadata,
  PropertyMetadata,
  BaseEntityMetadata,
  KeyOf,
} from '@mdtx/common';
import { ISupplier } from './supplier';

export class SupplierMetadata
  extends BaseEntityMetadata<ISupplier>
  implements EntityMetadata<ISupplier>
{
  override propertyNames(): KeyOf<ISupplier>[] {
    return [
      this.name().name,
      this.description().name,
      ...super.propertyNames(),
    ];
  }

  override columns(): PropertyMetadata<ISupplier>[] {
    return [this.name(), this.description(), ...super.columns()];
  }

  protected override formFields() {
    return [this.name(), this.description(), ...super.formFields()];
  }
}
