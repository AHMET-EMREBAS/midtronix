import { ICreateCustomerAddressDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const CustomerAddressFormBuilder =
  new FormGroupBuilder<ICreateCustomerAddressDto>('CustomerAddress Form')
    .add('street')
    .required()
    .shortText()

    .add('city')
    .required()
    .shortText()

    .add('state')
    .required()
    .shortText()

    .add('zip')
    .required()
    .shortText()

    .add('owner')
    .required()

    .done()
    .lock();
