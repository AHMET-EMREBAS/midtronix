import { ICreateCustomerDto } from '@mdtx/common';
import { CreateUserDto } from './user.dto';
import { Exclude, PartialType } from '@mdtx/core';

@Exclude()
export class CreateCustomerDto
  extends CreateUserDto
  implements ICreateCustomerDto {}

@Exclude()
export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
