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
import { InputValidator } from '@mdtx/material/core';
import { FormType } from './form-type';

export class NameForm implements FormType<ICreateNameDto> {
  constructor(protected readonly required = true) {}
  readonly name = new FormControl(
    '',
    InputValidator.create('name')
      .required(this.required)
      .minLength(3)
      .maxLength(50)
      .build()
  );
}

export class DescriptionForm
  extends NameForm
  implements FormType<ICreateDescriptionDto>
{
  constructor(createForm = true) {
    super(createForm);
  }
  readonly description = new FormControl(
    '',
    InputValidator.create('description').maxLength(600).build()
  );
}

export class CredentialsForm implements FormType<ICreateCredentialDto> {
  constructor(protected readonly required = true) {}
  readonly username = new FormControl(
    '',
    InputValidator.create('username').required(this.required).email().build()
  );

  readonly password = new FormControl(
    '',
    InputValidator.create('password').required(this.required).password().build()
  );
}

/**
 * The owner of the address will be read from the query.
 */
export class AddressForm implements FormType<ICreateAddressDto> {
  constructor(protected readonly required = true) {}

  readonly street = new FormControl(
    '',
    InputValidator.create('street').required(this.required).build()
  );

  readonly city = new FormControl(
    '',
    InputValidator.create('city').required(this.required).build()
  );

  readonly state = new FormControl(
    '',
    InputValidator.create('state').required(this.required).build()
  );

  readonly zip = new FormControl(
    '',
    InputValidator.create('zip').required(this.required).build()
  );

  readonly owner = new FormControl(
    '',
    InputValidator.create('owner').required(this.required).build()
  );
}

export class EmailForm implements FormType<ICreateEmailDto> {
  constructor(protected readonly required = true) {}
  readonly email = new FormControl(
    '',
    InputValidator.create('email').required(this.required).build()
  );
  readonly owner = new FormControl(
    '',
    InputValidator.create('owner').required(this.required).build()
  );
}

export class PhoneForm implements FormType<ICreatePhoneDto> {
  constructor(protected readonly required = true) {}
  readonly phone = new FormControl(
    '',
    InputValidator.create('phone').required(this.required).build()
  );
  readonly owner = new FormControl(
    '',
    InputValidator.create('owner').required(this.required).build()
  );
}

export class MediaForm implements FormType<ICreateMediaDto> {
  constructor(protected readonly required = true) {}

  readonly owner = new FormControl(
    '',
    InputValidator.create('owner').required(this.required).build()
  );
  readonly name = new FormControl(
    '',
    InputValidator.create('name').required(this.required).build()
  );

  readonly url = new FormControl(
    '',
    InputValidator.create('url').required(this.required).build()
  );
}
