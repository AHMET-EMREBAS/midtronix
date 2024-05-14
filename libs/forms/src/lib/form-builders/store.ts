import { ICreateStoreDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const StoreFormBuilder = new FormGroupBuilder<ICreateStoreDto>(
  'Store Form'
)
  .add('name')
  .required()
  .shortText()

  .add('description')
  .longText()
  
  .done()
  .lock();
