import { ICreateDiscountDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const DiscountFormBuilder = new FormGroupBuilder<ICreateDiscountDto>(
  'Discount Form'
)

  .add('name')
  .required()
  .shortText()

  .add('fixed')
  .min(0)

  .add('percent')
  .min(0)

  .add('startDate')
  .required()
  .date()

  .add('endDate')
  .required()
  .date()

  .add('sku')
  .required()

  .done()
  .lock();
