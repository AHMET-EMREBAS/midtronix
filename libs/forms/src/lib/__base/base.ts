import { FormControl } from '@angular/forms';
import {
  ICreateAddressDto,
  ICreateCredentialDto,
  ICreateDescriptionDto,
  ICreateNameDto,
  ICreateEmailDto,
  ICreatePhoneDto,
  ICreateMediaDto,
} from '@mdtx/common';
import { FormType } from './form-type';
import { FormGroupBuilder, ValidatorBuilder } from '@mdtx/material/core';

export interface ICommonFormValidators {
  name: unknown;
  description: unknown;
  barcode: unknown;
  email: unknown;
  password: unknown;
  phone: unknown;
}

export const CommonFormFields = new FormGroupBuilder<ICommonFormValidators>(
  'common'
)

  // name Property
  .add('name')
  .minLength(3)
  .maxLength(50)

  // Description property
  .add('description')
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

export class NameForm implements FormType<ICreateNameDto> {
  readonly name = new FormControl(
    '',
    CommonFormFields.getValidator('name')?.build()
  );
}

export class DescriptionForm
  extends NameForm
  implements FormType<ICreateDescriptionDto>
{
  readonly description = new FormControl(
    '',
    new ValidatorBuilder('description').maxLength(600).build()
  );
}

export class CredentialsForm implements FormType<ICreateCredentialDto> {
  constructor(protected readonly required = true) {}
  readonly username = new FormControl(
    '',
    new ValidatorBuilder('username').required().email().build()
  );

  readonly password = new FormControl(
    '',
    new ValidatorBuilder('password').required().password().build()
  );
}

/**
 * The owner of the address will be read from the query.
 */
export class AddressForm implements FormType<ICreateAddressDto> {
  constructor(protected readonly required = true) {}

  readonly street = new FormControl(
    '',
    new ValidatorBuilder('street').required().build()
  );

  readonly city = new FormControl(
    '',
    new ValidatorBuilder('city').required().build()
  );

  readonly state = new FormControl(
    '',
    new ValidatorBuilder('state').required().build()
  );

  readonly zip = new FormControl(
    '',
    new ValidatorBuilder('zip').required().build()
  );

  readonly owner = new FormControl(
    '',
    new ValidatorBuilder('owner').required().build()
  );
}

export class EmailForm implements FormType<ICreateEmailDto> {
  constructor(protected readonly required = true) {}
  readonly email = new FormControl(
    '',
    new ValidatorBuilder('email').required().build()
  );
  readonly owner = new FormControl(
    '',
    new ValidatorBuilder('owner').required().build()
  );
}

export class PhoneForm implements FormType<ICreatePhoneDto> {
  constructor(protected readonly required = true) {}
  readonly phone = new FormControl(
    '',
    new ValidatorBuilder('phone').required().build()
  );
  readonly owner = new FormControl(
    '',
    new ValidatorBuilder('owner').required().build()
  );
}

export class MediaForm implements FormType<ICreateMediaDto> {
  constructor(protected readonly required = true) {}

  readonly name = new FormControl(
    '',
    new ValidatorBuilder('name').required().build()
  );

  readonly url = new FormControl(
    '',
    new ValidatorBuilder('url').required().build()
  );

  readonly owner = new FormControl(
    '',
    new ValidatorBuilder('owner').required().build()
  );
}
