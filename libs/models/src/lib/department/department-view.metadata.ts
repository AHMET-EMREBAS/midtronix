import {
  EntityMetadata,
  PropertyMetadata,
  BaseViewMetadata,
  TableFields,
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
    };
  }

  override tableColumnNames(): TableFields<IDepartmentView> {
    return ['name', ...super.tableColumnNames()];
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
