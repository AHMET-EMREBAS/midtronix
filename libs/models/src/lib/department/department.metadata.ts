import {
  EntityMetadata,
  PropertyMetadata,
  BaseEntityMetadata,
  KeyOf,
} from '@mdtx/common';
import { IDepartment } from './department';

export class DepartmentMetadata
  extends BaseEntityMetadata<IDepartment>
  implements EntityMetadata<IDepartment>
{
  override propertyNames(): KeyOf<IDepartment>[] {
    return [this.name().name, ...super.propertyNames()];
  }

  override columns(): PropertyMetadata<IDepartment>[] {
    return [this.name(), ...super.columns()];
  }

  protected override formFields() {
    return [this.name(), ...super.formFields()];
  }
}
