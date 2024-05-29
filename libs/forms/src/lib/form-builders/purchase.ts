import { ICreatePurchaseDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const PurchaseFormBuilder = new FormGroupBuilder<ICreatePurchaseDto>(
  'Purchase Form'
)
  .add('name')
  .required()
  .shortText()
  .done()
  .lock();
