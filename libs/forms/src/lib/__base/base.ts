import { FormGroupBuilder } from '@mdtx/material/core';

export interface ICommonFormValidators {
  shortText: unknown;
  longText: unknown;
  email: unknown;
  password: unknown;
  phone: unknown;
  barcode: unknown;
}

export const CommonFormFields = new FormGroupBuilder<ICommonFormValidators>(
  'common'
)

  // name Property
  .add('shortText')
  .minLength(3)
  .maxLength(50)

  // Description property
  .add('longText')
  .maxLength(600)

  // Email property
  .add('email')
  .email()

  // Password property
  .add('password')
  .password()

  // Barcode property
  .add('barcode')
  .ean()

  // Phone property
  .add('phone')
  .phone()

  .done()
  .lock();
