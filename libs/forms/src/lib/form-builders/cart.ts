import { ICreateCartDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const CartFormBuilder = new FormGroupBuilder<ICreateCartDto>('Cart Form')
  .add('store')
  .required()

  .add('employee')
  .required()

  .add('customer')
  .required()

  .add('note')

  .done()
  .lock();
