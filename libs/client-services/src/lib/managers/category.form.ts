import { ICreateCategoryDto } from '@mdtx/common';
import { FormType, NameForm } from '../__base';

export class CategoryForm
  extends NameForm
  implements FormType<ICreateCategoryDto> {}
