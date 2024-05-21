import { ICreateTaxrateDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const TaxrateFormBuilder = new FormGroupBuilder<ICreateTaxrateDto>(
  'Taxrate Form'
)
  .add('state')
  .required()
  .shortText()

  .add('district')
  .required()
  .shortText()

  .add('rate')
  .required()
  .min(0)

  .done()
  .lock();
