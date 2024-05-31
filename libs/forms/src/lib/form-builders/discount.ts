import { ICreateDiscountDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const DiscountFormBuilder = new FormGroupBuilder<ICreateDiscountDto>(
  'Discount Form'
)
  .add('name')
  .required()
  .shortText()

  .add('startDate')
  .required()

  .add('endDate')
  .required()

  .add('fixed')
  .required()

  .add('percent')
  .required()

  .done()
  .lock();
