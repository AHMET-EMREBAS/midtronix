import { ICreateDiscountDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const DiscountFormBuilder = new FormGroupBuilder<ICreateDiscountDto>(
  'Discount Form'
)
  .add('name')
  .required()
  .shortText()
  .done()
  .lock();
