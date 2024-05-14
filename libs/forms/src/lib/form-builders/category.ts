import { ICreateCategoryDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const CategoryFormBuilder = new FormGroupBuilder<ICreateCategoryDto>(
  'Category Form'
)
  .add('name')
  .required()
  .shortText()
  .done()
  .lock();
