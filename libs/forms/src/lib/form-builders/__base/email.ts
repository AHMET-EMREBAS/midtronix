import { ICreateEmailDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const EmailFormBuilder = new FormGroupBuilder<ICreateEmailDto>(
  'Email Form'
)
  .add('email')
  .email()
  .required()

  .done()
  .lock();
