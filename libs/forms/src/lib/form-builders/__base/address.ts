import { ICreateAddressDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const AddressFormBuilder = new FormGroupBuilder<ICreateAddressDto>(
  'Address Form'
)
  .add('street')
  .required()
  .shortText()

  .add('city')
  .required()
  .shortText()

  .add('state')
  .required()
  .shortText()

  .add('country')
  .required()
  .shortText()

  .add('zip')
  .required()
  .shortText()
  
  .done()
  .lock();
