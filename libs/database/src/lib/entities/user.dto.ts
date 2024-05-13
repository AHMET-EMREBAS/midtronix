import { ICreateUserDto, IID } from '@mdtx/common';
import { CreateAddressDto, CreateCredentialsDto, CreateEmailDto, CreatePhoneDto } from './__base.dto';
import { Exclude, IDObjectProperty, PartialType } from '@mdtx/core';

@Exclude()
export class CreateUserDto
  extends CreateCredentialsDto
  implements ICreateUserDto
{
  @IDObjectProperty() roles?: IID[];
  @IDObjectProperty() supervisor?: IID;
}

@Exclude()
export class UpdateUserDto extends PartialType(CreateUserDto) {}

@Exclude()
export class CreateUserAddressDto extends CreateAddressDto {}
@Exclude()
export class UpdateUserAddressDto extends PartialType(CreateUserAddressDto) {}

@Exclude()
export class CreateUserEmailDto extends CreateEmailDto {}
@Exclude()
export class UpdateUserEmailDto extends PartialType(CreateUserEmailDto) {}

@Exclude()
export class CreateUserPhoneDto extends CreatePhoneDto {}
@Exclude()
export class UpdateUserPhoneDto extends PartialType(CreateUserPhoneDto) {}