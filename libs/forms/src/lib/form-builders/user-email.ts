import { ICreateUserEmailDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const UserEmailFormBuilder = new FormGroupBuilder<ICreateUserEmailDto>(
  'UserEmail Form'
)
  .add('email')
  .required()
  .email()

  .done()
  .lock();
