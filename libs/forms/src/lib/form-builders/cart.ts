import { ICreateCartDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const CartFormBuilder = new FormGroupBuilder<ICreateCartDto>('Cart Form')

  .add('owner')
  .required()

  .add('user')
  .required()

  .done()
  .lock();
