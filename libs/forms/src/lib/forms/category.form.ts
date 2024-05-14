import { ICreateCategoryDto } from '@mdtx/common';
import { CommonFormFields as CFF, FormType, NameForm } from '../__base';
import { FormGroupBuilder } from '@mdtx/material/core';

export class CategoryForm
  extends NameForm
  implements FormType<ICreateCategoryDto> {}

export const CategoryFormBuilder = new FormGroupBuilder(
  'Category Form'
).setValidator('name', CFF.getValidator('name'));
