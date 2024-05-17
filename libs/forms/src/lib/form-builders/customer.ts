import { ICreateCustomerDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const CustomerFormBuilder = new FormGroupBuilder<ICreateCustomerDto>(
  'Customer Form'
)

  .add('username')
  .required()
  .email()

  .add('password')
  .required()
  .password()

  .add('roles')

  .add('supervisor')

  .done()
  .lock();
