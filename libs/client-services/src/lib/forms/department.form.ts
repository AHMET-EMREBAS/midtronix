import { ICreateDepartmentDto } from '@mdtx/common';
import { FormType, NameForm } from '../__base';

export class DepartmentForm
  extends NameForm
  implements FormType<ICreateDepartmentDto> {}
