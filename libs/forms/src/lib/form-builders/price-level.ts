import { ICreatePriceLevelDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const PriceLevelFormBuilder = new FormGroupBuilder<ICreatePriceLevelDto>(
  'PriceLevel Form'
)
  .add('name')
  .required()
  .shortText()
  .done()
  .lock();
