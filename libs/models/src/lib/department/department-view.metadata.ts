import {
  EntityMetadata,
  PropertyMetadata,
  BaseViewMetadata,
  KeyOf,
} from '@mdtx/common';
import { IDepartmentView } from './department-view';

export class DepartmentViewMetadata
  extends BaseViewMetadata<IDepartmentView>
  implements EntityMetadata<IDepartmentView>
{
  departmentId(): PropertyMetadata<IDepartmentView> {
    return {
      name: 'departmentId',
      label: 'Department Id',
      suffixIcon: 'numbers',
      order: 200,
    };
  }

  override propertyNames(): KeyOf<IDepartmentView>[] {
    return [
      this.name().name,
      this.departmentId().name,
      ...super.propertyNames(),
    ];
  }

  override columns(): PropertyMetadata<IDepartmentView>[] {
    return [this.name(), this.departmentId(), ...super.columns()];
  }
}
