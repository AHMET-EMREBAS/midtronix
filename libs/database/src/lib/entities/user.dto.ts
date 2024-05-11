import { ICreateUserDto, IID } from '@mdtx/common';
import { CreateCredentialsDto } from './__base.dto';
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



