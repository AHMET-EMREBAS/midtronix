import { ICreateCustomerDto } from '@mdtx/common';
import { CreateUserDto } from './user.dto';
import { Exclude, PartialType } from '@mdtx/core';
import { CreateAddressDto, CreateEmailDto, CreatePhoneDto } from './__base.dto';

@Exclude()
export class CreateCustomerDto
  extends CreateUserDto
  implements ICreateCustomerDto {}

@Exclude()
export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}

@Exclude()
export class CreateCustomerAddressDto extends CreateAddressDto {}
@Exclude()
export class UpdateCustomerAddressDto extends PartialType(
  CreateCustomerAddressDto
) {}

@Exclude()
export class CreateCustomerEmailDto extends CreateEmailDto {}
@Exclude()
export class UpdateCustomerEmailDto extends PartialType(
  CreateCustomerEmailDto
) {}

@Exclude()
export class CreateCustomerPhoneDto extends CreatePhoneDto {}
@Exclude()
export class UpdateCustomerPhoneDto extends PartialType(
  CreateCustomerPhoneDto
) {}
