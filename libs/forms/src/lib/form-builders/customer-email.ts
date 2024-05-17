import { ICreateCustomerEmailDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const CustomerEmailFormBuilder =
  new FormGroupBuilder<ICreateCustomerEmailDto>('CustomerEmail Form')

    .add('email')
    .required()
    .email()

    .add('owner')
    .required()

    .done()
    .lock();
