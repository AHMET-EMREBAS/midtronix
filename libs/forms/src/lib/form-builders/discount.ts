import { ICreateDiscountDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const DiscountFormBuilder = new FormGroupBuilder<ICreateDiscountDto>(
  'Discount Form'
)
  .add('fixed')
  .required()
  .min(0)

  .add('percent')
  .required()
  .min(0)

  .add('startDate')
  .required()
  .date(0)

  .add('endDate')
  .required()
  .date(0)

  .add('skus')
  .required()
  
  .done()
  .lock();
